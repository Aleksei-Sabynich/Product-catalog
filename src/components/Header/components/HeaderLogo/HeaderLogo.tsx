import { Link } from 'react-router-dom';
import { Icon } from '../../../Icon';
import styles from './HeaderLogo.module.scss';

export const HeaderLogo = () => {

  return (
    <Link to='/' className={styles.header_logo}>
      <Icon name="logo" width={206} height={42} />
      <p>сеть  оптово-розничных центров</p>
    </Link>
  );
};
