import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import styles from '../Product/Product.module.scss';
import { useProductById } from '@/shared/hooks/useProductById';
import { BookmarkIcon } from '../BookmarkIcon';
import { AddToCartButton } from '../AddToCartButton';
import { ProductByIDSkeleton } from './ProductByIDSkeleton';

interface ProductByIDProps {
  id: number;
}

export const ProductByID = ({ id }: ProductByIDProps) => {
  const { data, isLoading } = useProductById(Number(id));
  if (isLoading) return < ProductByIDSkeleton />;
  return (
    data && (
      <div className={styles.product}>
        <Link to={`/${id}`} className={styles.link}>
          <div className={styles.product_image}>
            <img src={data.image} alt={data.title} />
            <BookmarkIcon id={id} />
          </div>
          <p className={styles.title}>{data.title}</p>
          <div className={styles.price}>
            <Icon name="price" width={32} height={32} />
            <p>{data.price} ₽</p>
          </div>
          <p className={styles.description}>{data.description}</p>
        </Link>
        < AddToCartButton id={data.id} title={data.title} price={data.price} image={data.image} />
      </div>
    )
  );
};
