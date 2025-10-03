// pages/api/midtrans.js
import midtransClient from "midtrans-client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { orderId, amount, customer } = req.body;

  // Midtrans Snap client
  let snap = new midtransClient.Snap({
    isProduction: false, // pakai sandbox dulu
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  try {
    const parameter = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount,
      },
      customer_details: {
        first_name: customer?.name || "User",
        email: customer?.email || "user@example.com",
      },
    };

    const transaction = await snap.createTransaction(parameter);

    return res.status(200).json({ token: transaction.token });
  } catch (error) {
    console.error("Midtrans error:", error);
    return res.status(500).json({ error: error.message });
  }
}
