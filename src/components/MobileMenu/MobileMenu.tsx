import { useСategoryStore } from "@/store/useСategoryStore";
import styles from './MobileMenu.module.scss'
import { CATEGORIES } from "@/shared/constants/categories";
import clsx from "clsx";

interface MobileMenuProps {
   onClose: () => void
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
   const { selectedCategory, setSelectedCategory } = useСategoryStore();
   return (
      <nav className={styles.mobile_menu}>
         {CATEGORIES.map(item => (
            <button
               key={item.id}
               onClick={() => {
                  setSelectedCategory(item.category)
                  onClose()
               }
               }
               className={clsx(styles.mobile_menuItem, (selectedCategory === item.category) && styles.button_active)}
            >
               {item.label}
            </button>
         ))
         }
      </nav >
   )
}
