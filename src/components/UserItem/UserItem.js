import styles from './UserItem.module.css';
import OrganizationIcon from '../Icon/OrganizationIcon';
import UserIcon from '../Icon/UserIcon';
import HeartIcon from '../Icon/HeartIcon';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';
import Link from 'next/link';
import { UserType } from '../../constants/user-type.constant';

const UserTypeIcon = {
  [UserType.ORGANIZATION]: OrganizationIcon,
  [UserType.USER]: UserIcon,
};

export default function UserItem({
  id,
  img,
  name,
  type,
  isFavorite,
  onMarkAsFavoriteClick,
}) {
  const TypeIcon = UserTypeIcon[type] || UserTypeIcon[UserType.USER];

  return (
    <div className={styles.container}>
      <Link className={styles.link} href={`/users/${name}`}>
        <div className={styles.data}>
          <div className={styles.avatar}>
            <PlaceholderImage
              className={styles.img}
              src={img}
              alt={name}
              placeholder={() => <UserIcon className={styles.placeholder} />}
            />
            <TypeIcon className={styles.icon} width={18} height={18} />
          </div>

          <p className={styles.name}>{name}</p>
        </div>
      </Link>

      <button
        className={styles.favorite}
        onClick={(e) => {
          e.stopPropagation();
          onMarkAsFavoriteClick(id);
        }}
      >
        <HeartIcon
          className={`${styles.heart} ${isFavorite ? styles['heart--is-favorite'] : ''}`}
        />
      </button>
    </div>
  );
}
