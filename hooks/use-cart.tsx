import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types';

export interface CartOrder extends Product {
  orderQuantity: number;
}

interface CartStore {
  items: CartOrder[];
  addItem: (data: CartOrder, quantity: number) => void;
  updateItemQuantity: (productId: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data, quantity) => {
        set((state) => {
          const itemIndex = state.items.findIndex(
            (item) => item.id === data.id
          );
          if (itemIndex !== -1) {
            const item = state.items[itemIndex];
            const newQuantity = item.orderQuantity + quantity;
            if (newQuantity <= data.countInStock) {
              state.items[itemIndex].orderQuantity = newQuantity;
              toast.success(`Added ${quantity} to the existing product.`);
            } else {
              toast.error('Cannot add more. No more stock available.');
            }
          } else {
            if (quantity <= data.countInStock) {
              state.items.push({ ...data, orderQuantity: quantity });
              toast.success('Item added to cart.');
            } else {
              toast.error('Cannot add more. No more stock available.');
            }
          }
          return { items: [...state.items] };
        });
      },
      updateItemQuantity: (productId, newQuantity) => {
        set((state) => {
          const itemIndex = state.items.findIndex(
            (item) => item.id === productId
          );
          if (itemIndex !== -1) {
            const item = state.items[itemIndex];
            if (newQuantity <= item.countInStock && newQuantity > 0) {
              state.items[itemIndex].orderQuantity = newQuantity;
              toast.success(
                `Quantity updated: you're buying ${newQuantity} ${item.name} .`
              );
            } else {
              toast.error(
                'Cannot update quantity. Invalid quantity or exceeds available stock.'
              );
            }
          }
          return { items: [...state.items] };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
