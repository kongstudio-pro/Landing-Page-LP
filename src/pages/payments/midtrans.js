import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MidtransPayment() {
  const router = useRouter();
  const { amount, product } = router.query;

  useEffect(() => {
    if (!amount || !product) {
      console.error('Missing query parameters: amount or product');
      return;
    }

    const fetchSnapToken = async () => {
      try {
        const response = await fetch('/api/midtrans/transaction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: `order-${Date.now()}`,
            grossAmount: amount,
            customerDetails: {
              firstName: 'John',
              lastName: 'Doe',
              email: 'john.doe@example.com',
              phone: '08123456789',
            },
          }),
        });

        const data = await response.json();

        if (response.ok && data.snapToken) {
          loadSnapScript(data.snapToken);
        } else {
          console.error('Failed to fetch snapToken:', data);
        }
      } catch (error) {
        console.error('Error fetching snapToken:', error);
      }
    };

    const loadSnapScript = (snapToken) => {
      const script = document.createElement('script');
      script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
      script.setAttribute('data-client-key', process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY);
      script.onload = () => {
        window.snap.pay(snapToken, {
          onSuccess: (result) => {
            console.log('Payment success:', result);
          },
          onPending: (result) => {
            console.log('Payment pending:', result);
          },
          onError: (result) => {
            console.error('Payment error:', result);
          },
        });
      };
      script.onerror = () => {
        console.error('Failed to load snap.js script');
      };
      document.body.appendChild(script);
    };

    fetchSnapToken();
  }, [amount, product]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold">Memproses pembayaran</h1>
      <p>Produk: {product}</p>
      <p>Jumlah: {amount}</p>
      <p className="text-red-500">Jika popup tidak muncul, pastikan browser mengizinkan popup dan script eksternal.</p>
    </div>
  );
}