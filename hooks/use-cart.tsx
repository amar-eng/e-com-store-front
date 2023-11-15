import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product, CartProduct } from '@/types';

interface CartStore {
  items: CartProduct[];
  addItem: (data: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data, quantity = 1) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === data.id
        );

        if (existingItemIndex > -1) {
          let updatedItems = [...currentItems];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ items: updatedItems });
          toast.success('Quantity updated in cart.');
        } else {
          set({ items: [...currentItems, { ...data, quantity }] });
          toast.success('Item added to cart.');
        }
      },
      removeItem: (id) => {
        let updatedItems = get()
          .items.map((item) => {
            if (item.id === id && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);

        set({ items: updatedItems });
        toast.success('Item updated in cart.');
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
