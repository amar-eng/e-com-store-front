import React from 'react';
import useCart from '@/hooks/use-cart';
import Button from './button';
import { toast } from 'react-hot-toast';

interface QuantityCounterProps {
  productId: string;
  onQuantityChange: (newQuantity: number) => void;
  quantity: number;
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  productId,
  quantity,
  onQuantityChange,
}) => {
  const { addItem, removeItem } = useCart();

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };
  return (
    <div className="flex items-center ">
      <Button
        onClick={handleDecrement}
        className="bg-gray-200  text-gray-700  rounded-full px-3 py-1"
      >
        -
      </Button>
      <div className="mx-3 font-light">{quantity}</div>
      <Button
        onClick={handleIncrement}
        className="bg-gray-200 text-gray-700  rounded-full px-3 py-1"
      >
        +
      </Button>
    </div>
  );
};

export default QuantityCounter;
