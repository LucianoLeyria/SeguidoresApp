import { MercadoPagoConfig, Payment } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

export async function GET(request: NextRequest) {
  const password = request.headers.get("x-admin-password");

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const payment = new Payment(client);

    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const result = await payment.search({
      options: {
        sort: "date_created",
        criteria: "desc",
        range: "date_created",
        begin_date: thirtyDaysAgo.toISOString(),
        end_date: now.toISOString(),
        limit: 50,
      },
    });

    const orders = (result.results || []).map((p: any) => ({
      id: p.id,
      status: p.status,
      statusDetail: p.status_detail,
      amount: p.transaction_amount,
      currency: p.currency_id,
      payerEmail: p.payer?.email || "N/A",
      description: p.description || "N/A",
      date: p.date_created,
      paymentMethod: p.payment_method_id,
      socialLink: p.external_reference || "",
    }));

    return NextResponse.json({ orders, total: result.paging?.total || 0 });
  } catch (error: any) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Error al obtener los pedidos" },
      { status: 500 }
    );
  }
}
