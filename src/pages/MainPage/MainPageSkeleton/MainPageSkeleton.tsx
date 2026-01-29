
import styles from './MainPageSkeleton.module.scss'

interface MainPageSkeletonProps {
   pageSize: number
}

export const MainPageSkeleton = ({ pageSize }: MainPageSkeletonProps) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.sort_controls}></div>
         <ul className={styles.main_page}>
            {Array.from({ length: pageSize }).map((_, i) => (
               <li key={i} className={styles.card}> </li>
            ))}
         </ul>
         <div className={styles.pagination}></div>
      </div>
   )
}