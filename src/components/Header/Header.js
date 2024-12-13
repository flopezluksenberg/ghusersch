import styles from './Header.module.css';
import HeartIcon from '../Icon/HeartIcon';
import { useFavorites } from '../../hooks/useFavorites';
import Link from 'next/link';
import WatermarkIcon from '../Icon/WatermarkIcon';

export default function Header() {
  const { favorites, isLoading } = useFavorites();

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.link} href="/">
          <WatermarkIcon className={styles.watermark} />
        </Link>

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
