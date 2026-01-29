import styles from './ProductByIDSkeleton.module.scss'

export const ProductByIDSkeleton = () => {
   return (
      <div className={styles.product}>
         <div className={styles.link}>
            <div className={styles.product_image}></div>
            <div className={styles.title}></div>
            <div className={styles.price}></div>
            <div className={styles.description}></div>
         </div>
         <div className={styles.button}></div>
      </div>
   )
}