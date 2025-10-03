import midtransClient from 'midtrans-client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { orderId, grossAmount, customerDetails } = req.body;

  if (!orderId || !grossAmount || !customerDetails) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const serverKey = process.env.MIDTRANS_SERVER_KEY;

  if (!serverKey) {
    return res.status(500).json({ message: 'Server key not configured' });
  }

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey,
  });

  try {
    const transaction = await snap.createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: grossAmount,
      },
      customer_details: customerDetails,
    });

    res.status(200).json({ snapToken: transaction.token });
  } catch (error) {
    console.error('Midtrans error:', error);
    res.status(500).json({ message: 'Failed to create transaction', error });
  }
}
