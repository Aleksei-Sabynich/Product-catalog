import type { ProductType } from "@/pages/MainPage/MainPage";
import { useSearchStore } from "@/store/useSearchStore";
import { useSortStore } from "@/store/useSortStore";
import { useСategoryStore } from "@/store/useСategoryStore";
import { useMemo } from "react";
import { useDebounce } from "./useDebounce";
import { useProducts } from "./useProducts";

export const useFilteredProducts = () => {
  const { data, isLoading, error, refetch } = useProducts();
  const { selectedCategory } = useСategoryStore();
  const { search } = useSearchStore();
  const { field, direction } = useSortStore();
  const debouncedSearch = useDebounce(search, 300);

  const filteredData = useMemo<ProductType[]>(() => {
    if (!data) return [];

    let result = data.filter(item => {
      const matchCategory = selectedCategory === 'all' ? true : item.category === selectedCategory;
      const matchSearch = item.title.toLowerCase().includes(debouncedSearch.toLowerCase().trim());
      return matchCategory && matchSearch;
    });

    result.sort((a, b) => {
      if (field === 'price') return direction === 'asc' ? a.price - b.price : b.price - a.price;
      if (field === 'title') return direction === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
      return 0;
    });

    return result; 
  }, [data, selectedCategory, debouncedSearch, field, direction]);

  return { filteredData, isLoading, error, refetch };
};