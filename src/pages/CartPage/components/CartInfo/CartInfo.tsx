import { useCartStore } from '@/store/useCartStore';
import styles from './CartInfo.module.scss';

export const CartInfo = () => {
   const { items, clearCart } = useCartStore();

   const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
   const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

   const myDiscount = totalPrice * 0.07;
   const walletDiscount = 257;
   const total = totalPrice - myDiscount - walletDiscount;

   const formatPrice = (value: number) => value.toFixed(2);

   return (
      <div className={styles.cart_summary}>
         <div className={styles.row}>
            <span>Товары, {totalCount} шт.</span>
            <span>{formatPrice(totalPrice)} ₽</span>
         </div>

         <div className={styles.row}>
            <span>Моя скидка</span>
            <span className={styles.discount}>-{formatPrice(myDiscount)} ₽</span>
         </div>

         <div className={styles.row}>
            <span>Скидка WB</span>
            <span className={styles.wallet_discount}>-{formatPrice(walletDiscount)} ₽</span>
         </div>

         <div className={styles.total}>
            <span>Итого</span>
            <span>{formatPrice(total)} ₽</span>
         </div>

         <div className={styles.buttons}>
            <button>Заказать</button>
            <button onClick={clearCart}>Очистить корзину</button>
         </div>
      </div>
   );
};