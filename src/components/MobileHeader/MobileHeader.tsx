import { Link } from 'react-router-dom'
import { Icon } from '../Icon'
import styles from './MobileHeader.module.scss'
import { useCartStore } from '@/store/useCartStore'
import { useMobileMenuStore } from '@/store/useMobileMenuStore'



export const MobileHeader = () => {
   const { openMenu } = useMobileMenuStore();
   const { items } = useCartStore()
   const totalCount = items.reduce((acc, el) => acc + el.quantity, 0);

   return (
      <div className={styles.mobile_menu}>
         <Link to={'/'} className={styles.mobile_menu_button}>
            <Icon name='home' width={20} height={20} />

         </Link>
         <button type='button' onClick={() => openMenu('categories')} className={styles.mobile_menu_button}>
            <Icon name='frame' width={20} height={20} />
         </button>
         <Link to={'/card'} className={styles.mobile_menu_button}>
            <div className={styles.shopping}>
               <Icon name='basket_menu' width={20} height={20} />
               {totalCount > 0 && (
                  <span className={styles.cartBadge}>{totalCount}</span>)
               }
            </div>
         </Link>
         <Link to={'/favorites'} className={styles.mobile_menu_button}>
            <Icon name='heart_menu' width={20} height={20} />
         </Link>
         <button type='button' onClick={() => openMenu('user')} className={styles.mobile_menu_button}>
            <Icon name='user_menu' width={20} height={20} />
         </button>
      </div>
   )
}