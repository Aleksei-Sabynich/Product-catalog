import styles from './ProductPageSkeleton.module.scss'

export const ProductPageSkeleton = () => {
   return (
      <div className={styles.productPage}>
         <div className={styles.wrapper_img}></div>
         <div className={styles.product_info}>
            <div className={styles.info_item}></div>
            <div className={styles.title}></div>
            <div className={styles.images}>
               <span></span>
               <span></span>
               <span></span>
            </div>
            <p className={styles.description}></p>
            <div className={styles.price}></div>
            <div className={styles.info_item}></div>
         </div>
      </div>
   )
}
