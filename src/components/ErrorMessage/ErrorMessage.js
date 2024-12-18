import styles from './ErrorMessage.module.css';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';

export default function ErrorMessage({
  title = 'Algo anda mal :(',
  description = 'Parece que nuestro sistema no esta funcionando correctamente. Te pedimos que intentes nuevamente en unos minutos',
}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <PlaceholderImage
        className={styles.img}
        src={'/error.webp'}
        alt={'Errores'}
      />
    </div>
  );
}
