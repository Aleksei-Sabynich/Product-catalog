import { create } from 'zustand';

type SearchStore = {
  search: string;
  setSearch: (value: string) => void;
  reset: () => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),
  reset: () => set({ search: '' }),
}));