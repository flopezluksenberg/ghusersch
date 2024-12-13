import styles from './Header.module.css';
import HeartIcon from '../Icon/HeartIcon';
import { useFavorites } from '../../hooks/useFavorites';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';

export default function Header() {
  const { favorites, isLoading } = useFavorites();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <PlaceholderImage
          className={styles.watermark}
          src={'/watermark.webp'}
          alt={'Fravega'}
        />
        <div className={styles.favorites}>
          <HeartIcon className={styles.heart} />

          <p
            className={`${styles.number} ${isLoading ? styles['number--is-loading'] : ''}`}
          >
            {favorites.length}
          </p>
        </div>
      </div>
    </header>
  );
}
