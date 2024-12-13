import styles from './EmptyList.module.css';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';

export default function EmptyList({
  title = 'No se encontraron elementos',
  description = 'Al parecer no hay elementos que coincidan con tu búsqueda.',
}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <PlaceholderImage
        className={styles.img}
        src={'/empty.webp'}
        alt={'Sin elementos'}
      />
    </div>
  );
}
