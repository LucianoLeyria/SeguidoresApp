import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, payer } = body;

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: items.map((item: any) => ({
          title: item.title,
          quantity: item.amount,
          unit_price: Number(item.price.replace(/[$,]/g, "")),
          currency_id: "ARS",
        })),
        payer: {
          email: payer.email,
          name: payer.fullName,
          identification: {
            type: "DNI",
            number: payer.dni,
          },
        },
        back_urls: {
          success: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
          failure: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/failure`,
          pending: `${process.env.NEXT_PUBLIC_SITE_URL}/payment/success`,
        },
        auto_return: "approved",
        notification_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhook/mercadopago`,
      },
    });

    return NextResponse.json({ id: result.id, init_point: result.init_point });
  } catch (error: any) {
    console.error("Error creating preference:", error);
    return NextResponse.json(
      { error: "Error al crear la preferencia de pago" },
      { status: 500 }
    );
  }
}
