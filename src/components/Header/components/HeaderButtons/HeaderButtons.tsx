import { useFavoritesStore } from '@/store/useFavoritesStore';
import { Icon } from '../../../Icon';
import styles from './HeaderButtons.module.scss';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/useCartStore';

export const HeaderButtons = () => {
  const { favoriteProduct } = useFavoritesStore();
  const { items } = useCartStore()
  const prise = items.reduce((ac, el) => ac + el.price * el.quantity, 0).toFixed(2);
  const totalCount = items.reduce((acc, el) => acc + el.quantity, 0);

  return (
    <div className={styles.header_buttons}>
      <Link to="/favorites">
        <Icon name={favoriteProduct.length ? 'heart-red' : 'heart'} width={32} height={28} />
        <p>Избранное</p>
      </Link>
      <Link to="/card" >
        <div className={styles.shopping}>
          <Icon name="shopping-cart" width={32} height={28} />
          {totalCount > 0 && (
            <span className={styles.cartBadge}>{totalCount}</span>)
          }
        </div>
        <p>{prise} ₽</p>
      </Link>
    </div>
  );
};
