import { create } from 'zustand';

type SortStore = {
  field: 'price' | 'title';
  direction: 'asc' | 'desc';
  setField: (value: 'price' | 'title') => void;
  setDirection: (value: 'asc' | 'desc') => void;
};

export const useSortStore = create<SortStore>((set) => ({
  field: 'price',
  direction: 'asc',
  setField: (value) => set({ field: value }),
  setDirection: (value) => set({ direction: value }),
}));