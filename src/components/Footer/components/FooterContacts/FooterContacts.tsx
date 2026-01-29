import { Icon } from '@/components/Icon';
import styles from './FooterContacts.module.scss';
import { Link } from 'react-router-dom';
export const FooterContacts = () => {
  return (
    <div className={styles.footer_contacts}>
      <div className={styles.logoWrapper}>
        <Icon name="logo-w" width={190} height={40} />
        <p>© ФлораМаркт, 2012-2020</p>
      </div>
      <div className={styles.telWrapper}>
        <div className={styles.icon}>
          <Icon name="phone" width={15} height={15} />
        </div>
        <div className={styles.contactTel}>
          <p>+7 965 151 18 39</p>
          <p>+7 916 122 18 98</p>
        </div>
      </div>
      <div className={styles.linksWrapper}>
        <Link to="#">Адреса цветочных центров</Link>
        <Link to="#">Политика конфиденциальности</Link>
      </div>
    </div>
  );
};
