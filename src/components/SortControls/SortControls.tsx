import { useSortStore } from '@/store/useSortStore';
import styles from './SortControls.module.scss';

export const SortControls = () => {
   const { field, direction, setField, setDirection } = useSortStore();

   return (
      <div className={styles.sortWrapper}>
         <div className={styles.sortBlock}>
            <label htmlFor="field">Сортировка по:</label>
            <select
               id="field"
               value={field}
               onChange={(e) => setField(e.target.value as 'price' | 'title')}
            >
               <option value="price">Цене</option>
               <option value="title">Названию</option>
            </select>
         </div>

         <div className={styles.sortBlock}>
            <label htmlFor="direction">Порядок:</label>
            <select
               id="direction"
               value={direction}
               onChange={(e) => setDirection(e.target.value as 'asc' | 'desc')}
            >
               <option value="asc">По возрастанию</option>
               <option value="desc">По убыванию</option>
            </select>
         </div>
      </div>
   );
};