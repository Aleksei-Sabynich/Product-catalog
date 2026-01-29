import styles from './ErrorState.module.scss';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <div className={styles.error}>
      <h2>Что-то пошло не так 😕</h2>
      <p>{message ?? 'Попробуйте обновить страницу позже'}</p>
      {onRetry && (
        <button className={styles.retryButton} onClick={onRetry}>
          Повторить
        </button>
      )}
    </div>
  );
};
