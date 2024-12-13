import styles from './PlaceholderImage.module.css';
import { useState } from 'react';

export default function PlaceholderImage({
  className = '',
  src,
  alt,
  placeholder: Placeholder,
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  function handleImageLoad() {
    setIsLoaded(true);
  }

  return (
    <div className={`${styles.container} ${className}`}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`${styles.img} ${isLoaded ? styles['img--loaded'] : ''}`}
      />

      {Placeholder && (
        <div className={styles.placeholder}>
          <Placeholder />
        </div>
      )}
    </div>
  );
}
