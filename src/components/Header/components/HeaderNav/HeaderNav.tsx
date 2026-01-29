import { Link, NavLink } from 'react-router-dom';
import styles from './HeaderNav.module.scss';
import { NAVIGATE } from '@/shared/constants/navigate';
import { Icon } from '@/components/Icon';
import clsx from 'clsx';

export const HeaderNav = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.header_nav}>
        {NAVIGATE.map(({ id, label, path }) => (
          <NavLink key={id} to={path} className={({ isActive }) =>
            clsx(styles.header_navItem, isActive && styles.isActive)
          }>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className={styles.header_auth}>
        <Link to="/login" className={styles.header_authBtn}>
          <Icon name="user" width={16} height={16} />
          <p className={styles.header_auth_text}>Войти</p>
        </Link>

        <Link to="/register" className={styles.header_authBtn}>
          <Icon name="sign-in" width={16} height={16} />
          <p className={styles.header_auth_text}>Регистрация</p>
        </Link>
      </div>
    </div>
  );
};
