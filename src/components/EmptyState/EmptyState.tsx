import styles from './EmptyState.module.scss';
import type { IconName } from '../Icon/model/types';
import { Icon } from '../Icon';

interface EmptyStateProps {
  title?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  icon?: IconName;
}

export const EmptyState = ({
  title,
  message,
  buttonText,
  onButtonClick,
  icon,
}: EmptyStateProps) => {
  return (
    <div className={styles.empty_state}>
      {icon && <Icon name={icon} width={80} height={80} />}
      <h2>{title}</h2>
      {message && <p>{message}</p>}
      {buttonText && onButtonClick && (
        <button className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
};
