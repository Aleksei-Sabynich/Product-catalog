import { Link } from 'react-router-dom';
import styles from './FooterColumn.module.scss';

export type Item = {
  id: string;
  label: string;
  path: string;
};

interface FooterColumnProps {
  list: Item[];
}

export const FooterColumn = ({ list }: FooterColumnProps) => {
  return (
    <div className={styles.footer_column}>
      {list.map(item => {
        return (
          <Link key={item.id} to={item.path} className={styles.footer_link}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
