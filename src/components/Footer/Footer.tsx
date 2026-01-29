
import { FooterColumn } from './components/FooterColumn';
import { FooterContacts } from './components/FooterContacts';
import styles from './Footer.module.scss';
import { NAVIGATE } from '@/shared/constants/navigate';
import { PRODUCT_TYPES } from '@/shared/constants/productTypes';
import { EVENT_TYPES } from '@/shared/constants/eventTypes';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterContacts />
        <FooterColumn list={NAVIGATE} />
        <FooterColumn list={EVENT_TYPES} />
        <FooterColumn list={PRODUCT_TYPES} />
      </div>
    </footer>
  );
};
