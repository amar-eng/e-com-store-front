'use client';

import { Product } from '@/types';
import Currency from './ui/currency';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Button from './ui/button';
import useCart, { CartOrder } from '@/hooks/use-cart';
import QuantityCounter from './ui/quantity';
import SeasonDisplay from './ui/season';

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = () => {
    const cartItem: CartOrder = {
      ...data,
      orderQuantity: quantity,
    };

    addItem(cartItem, quantity);
  };

  console.log('data', data);
  return (
    <div className="">
      <p className="uppercase font-light text-orange-600">{data.brand}</p>
      <div className="flex items-end">
        <h1 className="text-3xl font-regular text-gray-900">{data.name}</h1>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <p className="text-1xl text-gray-900 ">
          <Currency value={data?.price} />
        </p>
      </div>

      <hr className="my-4" />
      <div className="font-light">{data?.description}</div>
      <p className="uppercase font-light text-orange-600 my-4 text-sm">
        {data.color.name} - {data?.size?.name}
      </p>
      <hr className="my-4" />

      <div className="flex flex-col gap-y-6 my-5">
        <div className="flex items-center gap-x-4">
          <div className="flex ">
            Longevity: <div className="font-light ml-2">{data?.longevity}</div>
          </div>

          <div className="flex ">
            <SeasonDisplay season={data.season} />
          </div>
        </div>
      </div>
      <div className="my-4">
        {data?.countInStock < 5 ? (
          <div className="font-light text-red-600">
            Hurry Theres only {data.countInStock} left!
          </div>
        ) : (
          <div className="font-light">
            Count in stock is {data.countInStock}
          </div>
        )}
      </div>

      <div className="flex justify-between items-end ">
        <QuantityCounter
          productId={data.id}
          quantity={quantity}
          onQuantityChange={setQuantity}
        />

        <Button
          className="flex items-center lg:gap-x-4 bg-orange-700 uppercase font-light text-sm"
          onClick={onAddToCart}
        >
          Add to Cart <ShoppingCart strokeWidth="1" />
        </Button>
      </div>
    </div>
  );
};

export default Info;
