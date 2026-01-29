import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import type { ProductType } from '@/pages/MainPage/MainPage';

export const useProducts = () => {
  return useQuery<ProductType[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};
