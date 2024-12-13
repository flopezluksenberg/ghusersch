import styles from './UserDetailItem.module.css';

export default function UserDetailItem({ icon: Icon, text }) {
  return (
    <div className={styles.container}>
      <Icon className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
