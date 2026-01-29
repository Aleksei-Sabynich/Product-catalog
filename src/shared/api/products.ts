import type { ProductType } from '@/pages/MainPage/MainPage';

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await fetch('https://fakestoreapi.com/products');

  if (!response.ok) {
    throw new Error(`Ошибка при получении данных: ${response.status}`);
  }
  const data: ProductType[] = await response.json();
  return data;
};
