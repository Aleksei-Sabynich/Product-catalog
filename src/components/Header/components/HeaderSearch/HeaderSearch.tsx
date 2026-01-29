import { useSearchStore } from "@/store/useSearchStore";
import styles from './HeaderSearch.module.scss'

export const HeaderSearch = () => {
   const { search, setSearch } = useSearchStore();

   return (
      <div className={styles.wrapper_input}>
         <input
            type="text"
            placeholder="Поиск по названию"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searh_input}
         />
      </div>
   );
};