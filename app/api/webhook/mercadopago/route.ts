import { MercadoPagoConfig, Payment } from "mercadopago";
import { NextRequest, NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
});

async function sendWhatsAppNotification(message: string) {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  const phone = process.env.NOTIFICATION_PHONE || "5491149166103";

  if (!apiKey) return;

  try {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;
    await fetch(url);
  } catch (error) {
    console.error("Error sending WhatsApp notification:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.type === "payment" && body.data?.id) {
      const payment = new Payment(client);
      const paymentData = await payment.get({ id: body.data.id });

      if (paymentData.status === "approved") {
        const socialLink = paymentData.external_reference || "No proporcionado";
        const message =
          `✅ PAGO APROBADO\n\n` +
          `💰 Monto: $${paymentData.transaction_amount?.toLocaleString()}\n` +
          `📧 Email: ${paymentData.payer?.email || "N/A"}\n` +
          `🔗 Red social: ${socialLink}\n` +
          `🆔 ID Pago: ${paymentData.id}\n` +
          `📦 Descripcion: ${paymentData.description || "N/A"}\n` +
          `📅 Fecha: ${new Date(paymentData.date_created || "").toLocaleString("es-AR")}`;

        // Fire and forget - no await to respond quickly to MP
        sendWhatsAppNotification(message);
      }
    }

    return NextResponse.json({ status: "ok" }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    // Always return 200 to avoid MP retries
    return NextResponse.json({ status: "ok" }, { status: 200 });
  }
}
