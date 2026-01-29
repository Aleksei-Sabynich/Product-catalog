import { useNavigate } from 'react-router-dom';

import errorImage from '@/shared/images/error.png';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.empty_state}>
      <img src={errorImage} alt="error" width={64} height={64} />
      <h2>Такой страницы не существует</h2>
      <p>Проверьте адрес или попробуйте вернуться на главную.</p>
      <button onClick={() => navigate('/')}>Вернуться на главную</button>
    </div>
  );
};

