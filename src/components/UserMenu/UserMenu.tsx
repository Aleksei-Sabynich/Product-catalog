import { NAVIGATE } from '@/shared/constants/navigate'
import styles from './UserMenu.module.scss'
import { Link } from 'react-router-dom'


interface UserMenuProps {
   onClose: () => void
}

export const UserMenu = ({ onClose }: UserMenuProps) => {
   return (
      <div className={styles.header}>
         <nav className={styles.header_nav}>
            {NAVIGATE.map(({ id, label, path }) => (
               <Link key={id} to={path} onClick={onClose} className={styles.header_navItem}>
                  {label}
               </Link>
            ))}
         </nav>

         <div className={styles.header_auth}>
            <Link to="/login" onClick={onClose} className={styles.header_authBtn}>
               <p className={styles.header_auth_text}>Войти</p>
            </Link>

            <Link to="/register" onClick={onClose} className={styles.header_authBtn}>
               <p className={styles.header_auth_text}>Регистрация</p>
            </Link>
         </div>
      </div>
   )
}