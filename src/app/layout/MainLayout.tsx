import { Footer } from '@/components/Footer';
import { Header } from '../../components/Header';
import styles from './MainLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { CartToast } from '@/components/CartToast';
import { MobileHeader } from '@/components/MobileHeader';
import { MobileMenu } from '@/components/MobileMenu';
import { useMobileMenuStore } from '@/store/useMobileMenuStore';
import { UserMenu } from '@/components/UserMenu';

export const MainLayout: React.FC = () => {
  const { mobileMenu, closeMenu } = useMobileMenuStore();
  return (
    <div className={styles.body}>
      <Header />
      <MobileHeader />
      <main className={styles.main}>
        <Outlet />
        <CartToast />
      </main>

      <Footer />
      {mobileMenu === 'categories' && <MobileMenu onClose={closeMenu} />}
      {mobileMenu === 'user' && <UserMenu onClose={closeMenu} />}
    </div >
  );
};
