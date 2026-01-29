import styles from './MainPage.module.scss';
import { Product } from '@/components/Product';
import { ErrorState } from '@/components/ErrorState';
import { Pagination } from '@/components/Pagination';
import { usePagination } from '@/shared/hooks/usePagination';
import { EmptyState } from '@/components/EmptyState';
import { useEffect } from 'react';
import { useFilteredProducts } from '@/shared/hooks/useFilteredProducts';
import { SortControls } from '@/components/SortControls/SortControls';
import { useResetFilters } from '@/shared/hooks/useResetFilters';
import { MainPageSkeleton } from './MainPageSkeleton';

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number,
    count: number
  }
}
const ITEMS_PER_PAGE = 12;

export const MainPage = () => {

  const { filteredData, isLoading, error, refetch } = useFilteredProducts();
  const resetFilters = useResetFilters()
  const { currentPage, setCurrentPage, currentItems, totalPages } = usePagination(
    filteredData,
    ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData, setCurrentPage]);


  if (isLoading) return <MainPageSkeleton pageSize={ITEMS_PER_PAGE} />;
  if (error) return <ErrorState message={error.message} onRetry={refetch} />;

  return (
    <div className={styles.wrapper}>
      {currentItems.length ? (
        <>
          <SortControls />
          <ul className={styles.main_page}>
            {currentItems.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <EmptyState
          title="По вашему запрос  ничего не найдено"
          message="Товар удалён или отсутствует на складе. Просмотрите полный каталог"
          buttonText="Перейти в каталог"
          onButtonClick={() => resetFilters()}
          icon="empty_cart"
        />
      )}
    </div>
  );
};