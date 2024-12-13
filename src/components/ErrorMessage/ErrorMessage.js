import styles from './ErrorMessage.module.css';

export default function ErrorMessage({
  title = 'Algo anda mal :(',
  description = 'Parece que nuestro sistema no esta funcionando correctamente. Te pedimos que intentes nuevamente en unos minutos',
}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <img className={styles.img} src={'/error.webp'} alt={'Error page'} />
    </div>
  );
}
