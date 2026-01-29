import { Icon } from '../../../Icon';
import styles from './HeaderContacts.module.scss';

export const HeaderContacts = () => {
  return (
    <div className={styles.header_contacts}>
      <div className={styles.contactTel}>
        <p className={styles.contactTel_item}>+7 965 151 18 39</p>
        <p className={styles.contactTel_item}>+7 916 122 18 98</p>
      </div>
      <div className={styles.contactAdress}>
        <div>
          <Icon name="clock" width={16} height={16} />
          <p>Ждем вас с 8:00 до 22:00</p>
        </div>
        <div>
          <Icon name="map" width={16} height={16} />
          <p>Адреса розничных центров</p>
        </div>
      </div>
    </div>
  );
};
