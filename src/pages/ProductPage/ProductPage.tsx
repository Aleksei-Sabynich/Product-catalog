import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { Icon } from '@/components/Icon';
import { useProductById } from '@/shared/hooks/useProductById';
import { ErrorState } from '@/components/ErrorState';
import { ProductPageSkeleton } from './ProductPageSkeleton';

export const ProductPage = () => {
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useProductById(Number(id));

  if (isLoading) return <ProductPageSkeleton />;
  if (error) return <ErrorState message={error.message} onRetry={refetch} />;

  if (!data) {
    return <p>Товар не найден</p>;
  }
  return (
    <div className={styles.productPage}>
      <div className={styles.wrapper_img}>
        <img src={data.image} alt={data.title} />
      </div>
      <div className={styles.product_info}>
        <div className={styles.info_item}>
          <Icon name="original" width={30} height={30} />
          <p>Оригинал</p>
        </div>
        <h3 className={styles.title}>{data.title}</h3>
        <div className={styles.images}>
          <img src={data.image} alt={data.title} />
          <img src={data.image} alt={data.title} />
          <img src={data.image} alt={data.title} />
        </div>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.price}>
          <Icon name="price" width={32} height={32} />
          <p>{data.price} ₽</p>
        </div>
        <div className={styles.info_item}>
          <Icon name="return" width={30} height={30} />
          <p>Возврат через заявку</p>
        </div>
      </div>
    </div>
  );
};
