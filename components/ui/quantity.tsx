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
    <div className="flex items-center">
      <Button onClick={handleDecrement}>-</Button>
      <div className="mx-2">{quantity}</div>
      <Button onClick={handleIncrement}>+</Button>
    </div>
  );
};

export default QuantityCounter;
