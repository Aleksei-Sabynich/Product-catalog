import { useFavoritesStore } from '@/store/useFavoritesStore';
import clsx from 'clsx';
import { Icon } from '../Icon';
import styles from './BookmarkIcon.module.scss';

interface BookmarkIconProps {
  id: number;
}

export const BookmarkIcon = ({ id }: BookmarkIconProps) => {
  const { isFavorite, toggleFavorite } = useFavoritesStore();

  const handleFavorite = (event: React.MouseEvent) => {
    toggleFavorite({ id: id });
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Icon
      name={isFavorite(id) ? 'star_gold' : 'star'}
      width={30}
      height={30}
      className={clsx(styles.icon, isFavorite(id) && styles.rotate)}
      onClick={handleFavorite}
    />
  );
};
