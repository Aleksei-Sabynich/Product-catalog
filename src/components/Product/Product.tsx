import type { ProductType } from '@/pages/MainPage/MainPage';
import styles from './Product.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { BookmarkIcon } from '../BookmarkIcon';
import { AddToCartButton } from '../AddToCartButton';
import { useCartStore } from '@/store/useCartStore';

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  const { id, title, price, description, image } = product;
  const { items } = useCartStore()
  const cartItem = items.find(item => item.id === id);
  const cartQuantity = cartItem?.quantity ?? 0;
  const isOutOfStock = cartQuantity > product.rating.count;

  return (
    <div className={styles.product}>
      <Link to={`product/${id}`} className={styles.product_link}>
        <div className={styles.product_image}>
          <img src={image} alt={title} />
          <BookmarkIcon id={id} />
          <p className={styles.product_hint}>Быстрый просмотр</p>
        </div>
        <p className={styles.title}>{title}</p>
        <div className={styles.wrapper_price}>
          <div className={styles.price}>
            <Icon name="price" width={32} height={32} />
            <p>{price} ₽</p>
          </div>
          <Icon name={isOutOfStock ? 'out_stock' : 'in_stock'} width={32} height={32} />
        </div>
        <p className={styles.description}>{description}</p>
      </Link>
      <AddToCartButton id={id} price={price} title={title} image={image} />
    </div>
  );
};
