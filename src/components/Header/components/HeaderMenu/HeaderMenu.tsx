
import { useСategoryStore } from '@/store/useСategoryStore';
import styles from './HeaderMenu.module.scss';
import clsx from 'clsx';
import { CATEGORIES } from '@/shared/constants/categories';

export const HeaderMenu = () => {

  const { selectedCategory, setSelectedCategory } = useСategoryStore();
  return (
    <nav className={styles.header_menu}>
      <div className={styles.container}>
        {CATEGORIES.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedCategory(item.category)}
            className={clsx(styles.header_menuItem, (selectedCategory === item.category) && styles.button_active)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav >
  );
};
