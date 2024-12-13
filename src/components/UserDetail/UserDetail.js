import styles from './UserDetail.module.css';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import UserIcon from '../Icon/UserIcon';
import UserDetailItem from '../UserDetailItem/UserDetailItem';
import LocationIcon from '../Icon/LocationIcon';
import HeartIcon from '../Icon/HeartIcon';
import { useFavorites } from '../../hooks/useFavorites';
import { useEffect, useState } from 'react';
import OrganizationIcon from '../Icon/OrganizationIcon';
import EmailIcon from '../Icon/EmailIcon';
import CalendarIcon from '../Icon/CalendarIcon';
import RepositoryIcon from '../Icon/RepositoryIcon';
import CalendarUtils from '../../utils/calendar.utils';

export default function UserDetail({
  id,
  username,
  name,
  img,
  biography,
  location,
  email,
  company,
  createdAt,
  repositories,
  followers,
  following,
}) {
  const { isFavorite, toggleFavorite, favorites } = useFavorites();
  const [isUserFavorite, setIsUserFavorite] = useState(false);

  useEffect(() => {
    try {
      setIsUserFavorite(isFavorite(id));
    } catch (error) {
      setIsUserFavorite(false);
    }
  }, [favorites]);

  function onFavoriteClick(id) {
    toggleFavorite(id);
  }

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <PlaceholderImage
          className={styles.img}
          src={img}
          alt={name}
          placeholder={() => <UserIcon className={styles.placeholder} />}
        />

        <button
          className={styles.favorite}
          onClick={() => {
            onFavoriteClick(id);
          }}
        >
          <HeartIcon
            className={`${styles.heart} ${isUserFavorite ? styles['heart--is-favorite'] : ''}`}
          />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles['name-container']}>
          <p className={styles.name}>{name}</p>
          <p className={styles.username}>@{username}</p>
        </div>
        {biography && <div className={styles.bio}>{biography}</div>}
        <div className={styles.details}>
          {location && <UserDetailItem text={location} icon={LocationIcon} />}
          {email && <UserDetailItem text={email} icon={EmailIcon} />}
          {company && <UserDetailItem text={company} icon={OrganizationIcon} />}
          <UserDetailItem
            text={`Se unió el ${CalendarUtils.formatDate(createdAt)}`}
            icon={CalendarIcon}
          />
          {repositories && (
            <UserDetailItem
              text={`Tiene ${repositories} repositorios`}
              icon={RepositoryIcon}
            />
          )}
        </div>
        <div className={styles.follows}>
          <p className={styles['follow-item']}>
            <span className={styles['follow-number']}>{following}</span>{' '}
            Siguiendo
          </p>
          <p className={styles['follow-item']}>
            <span className={styles['follow-number']}>{followers} </span>
            Seguidores
          </p>
        </div>
      </div>
    </div>
  );
}
