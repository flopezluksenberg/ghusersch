import styles from './Footer.module.css';
import WatermarkIcon from '../Icon/WatermarkIcon';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles['watermark-container']}>
          <WatermarkIcon className={styles.watermark} />
        </div>
        <div className={styles.support}>
          <p className={styles['footer-line']}>Atención al cliente:</p>
          <div className={styles['support-content']}>
            <p
              className={`${styles['footer-line']} ${styles['footer-line--bold']}`}
            >
              0800 122 0338
            </p>
            <p
              className={`${styles['footer-line']} ${styles['footer-line--bold']}`}
            >
              0810 999 3728
            </p>
          </div>
        </div>
        <div className={styles.emails}>
          <p className={styles['footer-line']}>Cobranza de créditos:</p>
          <p
            className={`${styles['footer-line']} ${styles['footer-line--bold']}`}
          >
            cobranzas@fravega.com.ar
          </p>
        </div>
        <div className={styles.sales}>
          <p className={styles['footer-line']}>Venta telefónica:</p>
          <p
            className={`${styles['footer-line']} ${styles['footer-line--bold']}`}
          >
            0810 333 8700
          </p>
          <div className={styles.calendar}>
            <p
              className={`${styles['footer-line']} ${styles['footer-line--light']}`}
            >
              LU-VI de 8:00 a 20:00 hs
            </p>
            <p
              className={`${styles['footer-line']} ${styles['footer-line--light']}`}
            >
              SA-DO de 9:00 a 21:00 hs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
