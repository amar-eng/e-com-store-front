// Summary.jsx
'use client';

import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-hot-toast';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

const Summary = () => {
  const searchParams = useSearchParams();
  const { items, removeAll } = useCart(); // Changed to destructure methods from useCart

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  // Calculate total price based on item quantity
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price) * item.orderQuantity; // Multiply price by quantity
  }, 0);

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { cartItems: items.map((item) => item) }
    );

    window.location = res.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6 bg-orange-700"
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
