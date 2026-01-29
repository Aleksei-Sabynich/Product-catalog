import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteType = {
  id: number;
};

type FavoritesStore = {
  favoriteProduct: FavoriteType[];
  toggleFavorite: (item: FavoriteType) => void;
  isFavorite: (id: number) => boolean;
};


export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favoriteProduct: [],

      toggleFavorite: item => {
        const exists = get().favoriteProduct.some(el => el.id === item.id);
        const newFavorites = exists
          ? get().favoriteProduct.filter(el => el.id !== item.id)
          : [...get().favoriteProduct, item];

        set({ favoriteProduct: newFavorites });
      },

      isFavorite: id => get().favoriteProduct.some(item => item.id === id),
    }),
    {
      name: 'favorites',
    }
  )
);