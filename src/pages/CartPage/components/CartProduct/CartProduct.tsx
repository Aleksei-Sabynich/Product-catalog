import { useCartStore } from '@/store/useCartStore'
import styles from './CartProduct.module.scss'
import { Icon } from '@/components/Icon';

interface CartProductPropr {
   id: number
}

export const CartProduct = ({ id }: CartProductPropr) => {
   const { items, addToCart, removeFromCart } = useCartStore();

   const item = items.find(item => item.id === id)
   if (!item) return null

   return (
      < div className={styles.cart_product} >
         <div className={styles.cart_product_name}>
            <div className={styles.wrapper_image}>
               <img src={item.image} alt={item.title} />
            </div>
            <h4 className={styles.cart_title}>{item.title}</h4>
         </div>
         <div className={styles.wrapper_button}>
            <button onClick={() => {
               removeFromCart(item.id)
            }} >
               <Icon name='minus' width={20} height={20} />
            </button>
            <p>{item.quantity}</p>
            <button onClick={() => {
               addToCart({ id: item.id, title: item.title, price: item.price, image: item.image })
            }}>
               <Icon name='plus' width={20} height={20} />
            </button>
         </div>
         <div className={styles.wrapper_price}>
            <Icon name='money' width={32} height={32} />
            <p>{item.price} ₽</p>
         </div>
      </div >
   )
}