import { useFavoritesStore } from '@/store/useFavoritesStore';
import styles from './FavoritesPage.module.scss';
import { ProductByID } from '@/components/ProductByID';
import { Pagination } from '@/components/Pagination';
import { EmptyState } from '@/components/EmptyState';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ITEMS_PER_PAGE = 4;

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favoriteProduct } = useFavoritesStore();
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = favoriteProduct.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = favoriteProduct.slice(startIndex, endIndex);

  return (
    <div className={styles.wrapper}>
      {favoriteProduct.length ? (
        <>
          <ul className={styles.main_page}>
            {currentItems.map(item => {
              return <ProductByID key={item.id} id={item.id} />;
            })}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <EmptyState
          title="Нет избранного"
          message="Вы ещё не добавили товары в избранное. Найдите понравившиеся и сохраните их здесь!"
          buttonText="Перейти в каталог"
          onButtonClick={() => navigate('/')}
          icon="empty_cart"
        />
      )}
    </div>
  );
};
