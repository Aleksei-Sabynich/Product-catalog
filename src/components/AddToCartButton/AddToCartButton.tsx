import { useState } from 'react'
import styles from './AddToCartButton.module.scss'
import { Icon } from '../Icon'
import { useCartStore } from '@/store/useCartStore'
import { useToastStore } from '@/store/useToastStore';

interface AddToCartButtonProps {
   id: number;
   title: string;
   price: number;
   image: string

}

export const AddToCartButton = ({ id, title, price, image }: AddToCartButtonProps) => {
   const { addToCart, removeFromCart } = useCartStore()
   const { showToast } = useToastStore()

   const [count, setCount] = useState(0)
   return (
      <div className={styles.wrapper_button}>
         {count === 0
            ? <div className={styles.button_text} onClick={() => {
               setCount(1)
               addToCart({ id, title, price, image })
               showToast()
            }}>
               <Icon name='basket' width={32} height={32} />
               <p>Добавить в корзину</p>
            </div>
            : <div className={styles.button_count}>
               <button onClick={() => {
                  setCount(pre => pre - 1);
                  removeFromCart(id)
               }} >
                  <Icon name='minus' width={32} height={32} />
               </button>
               {count}
               <button onClick={() => {
                  setCount(pre => pre + 1);
                  addToCart({ id, title, price, image })
               }}>
                  <Icon name='plus' width={32} height={32} />
               </button>
            </div>
         }
      </div>
   )
} 