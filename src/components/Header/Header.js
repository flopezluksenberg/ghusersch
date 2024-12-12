import styles from './Header.module.css';
import HeartIcon from '../Icon/HeartIcon';
export default function Header() {
  return (
    <div className={styles.container}>
      <img
        className={styles.watermark}
        src={'/watermark.webp'}
        alt={'Fravega'}
      />
      <div className={styles.favorites}>
        <HeartIcon className={styles.heart} />
        <p className={styles.number}>2</p>
      </div>
    </div>
  );
}
