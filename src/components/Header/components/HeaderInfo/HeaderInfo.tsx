import { HeaderButtons } from '../HeaderButtons';
import { HeaderContacts } from '../HeaderContacts';
import { HeaderLogo } from '../HeaderLogo';
import { HeaderSearch } from '../HeaderSearch';
import styles from './HeaderInfo.module.scss';

export const HeaderInfo = () => {
  return (
    <div className={styles.header_info}>
      <HeaderLogo />
      <HeaderContacts />
      <HeaderSearch />
      <HeaderButtons />
    </div>
  );
};
