'use client';

import { Product } from '@/types';
import Currency from './ui/currency';
import { ShoppingCart } from 'lucide-react';
import { MouseEventHandler, useState } from 'react';
import Button from './ui/button';
import useCart, { CartOrder } from '@/hooks/use-cart';
import QuantityCounter from './ui/quantity';

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = () => {
    const cartItem: CartOrder = {
      ...data, // Spread all properties of Product
      orderQuantity: quantity, // Add the orderQuantity property
    };

    addItem(cartItem, quantity);
  };

  console.log(addItem);
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-light">Amount:</h3>
          <div className="">{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-light">Color:</h3>
          <div
            className="h-6 w-6 rounded-full "
            style={{ backgroundColor: data?.color?.value }}
          ></div>
        </div>
      </div>
      <QuantityCounter
        productId={data.id}
        quantity={quantity}
        onQuantityChange={setQuantity}
      />
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          className="flex items-center gap-x-4 bg-orange-700"
          onClick={onAddToCart}
        >
          Add to Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
