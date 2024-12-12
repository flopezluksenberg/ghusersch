import styles from './UserItem.module.css';
import OrganizationIcon from '../Icon/OrganizationIcon';
import UserIcon from '../Icon/UserIcon';

const UserType = {
  USER: 'User',
  ORGANIZATION: 'Organization',
};

const UserTypeIcon = {
  [UserType.ORGANIZATION]: OrganizationIcon,
  [UserType.USER]: UserIcon,
};

export default function UserItem({ img, name, type }) {
  const TypeIcon = UserTypeIcon[type] || UserTypeIcon[UserType.USER];

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img className={styles.img} src={img} alt={name} />
        <TypeIcon className={styles.icon} width={18} height={18} />
      </div>

      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
}
