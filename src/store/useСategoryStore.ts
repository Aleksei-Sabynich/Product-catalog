import { create } from 'zustand';

type СategoryStore = {
  selectedCategory: string ;  
  setSelectedCategory: (category: string ) => void;
};

export const useСategoryStore = create<СategoryStore>((set) => ({
  selectedCategory: 'all',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));