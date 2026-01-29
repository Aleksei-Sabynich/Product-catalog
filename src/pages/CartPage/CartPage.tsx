import { EmptyState } from '@/components/EmptyState';
import { useCartStore } from '@/store/useCartStore';
import { useNavigate } from 'react-router-dom';
import styles from './CartPage.module.scss'
import { CartProduct } from './components/CartProduct';
import { CartInfo } from './components/CartInfo';

export const CartPage = () => {
   const navigate = useNavigate();
   const { items } = useCartStore();

   return (
      <div className={styles.card}>
         {items.length
            ? <>
               <h2>Корзина</h2>
               <div className={styles.wrapper_card}>
                  <div className={styles.wrapper_product}>
                     {items.map(item => (
                        <CartProduct key={item.id} id={item.id} />
                     ))}
                  </div>
                  <CartInfo />
               </div>
            </>
            : <EmptyState
               title="Ваша корзина пуста"
               message="Похоже, вы ещё ничего не добавили. Самое время выбрать что-нибудь в каталоге"
               buttonText="Перейти в каталог"
               onButtonClick={() => navigate('/')}
               icon="empty_cart"
            />
         }
      </div >
   )
};
