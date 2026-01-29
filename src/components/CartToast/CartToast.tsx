import { useEffect } from 'react'
import styles from './CartToast.module.scss'
import { useToastStore } from '@/store/useToastStore'

export const CartToast = () => {
   const { isToastVisible, hideToast } = useToastStore()

   useEffect(() => {
      if (!isToastVisible) return
      const timer = setTimeout(hideToast, 2000)
      return () => clearTimeout(timer)
   }, [isToastVisible, hideToast])

   if (!isToastVisible) return null
   return (
      <p className={styles.toast}>
         Товар добавлен в корзину
      </p>
   )
}