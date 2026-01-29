import { useQuery } from '@tanstack/react-query';
import type { ProductType } from '@/pages/MainPage/MainPage';
import { fetchProducById } from '../api/productById';

export const useProductById = (id: number) => {
  return useQuery<ProductType, Error>({
    queryKey: ['productsById', id],
    queryFn: () => fetchProducById(id),
  });
};
