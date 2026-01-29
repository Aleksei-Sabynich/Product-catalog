import styles from './Header.module.scss';
import { HeaderInfo } from './components/HeaderInfo';
import { HeaderMenu } from './components/HeaderMenu';
import { HeaderNav } from './components/HeaderNav';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderNav />
        <HeaderInfo />
      </div>
      <HeaderMenu />
    </header>
  );
};
