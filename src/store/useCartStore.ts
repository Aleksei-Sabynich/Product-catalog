import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export interface CartStore {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist((set, get) => ({

    items: [],
    addToCart: (product) => {
      const items = get().items;
      const existing = items.find(item => item.id === product.id);

      if (existing) {
        set({
          items: items.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item),
        });
      } else {
        set({ items: [...items, { ...product, quantity: 1 }], });
      }
    },

    removeFromCart: (id) => {
      const items = get().items;
      const existing = items.find(item => item.id === id);

      if (!existing) return;

      if (existing.quantity === 1) {
        set({ items: items.filter(item => item.id !== id), });
      } else {
        set({
          items: items.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        });
      }
    },
    clearCart: () => set({ items: [] }),
  }),
    {
      name: 'cart-storage',
    }
  )
);