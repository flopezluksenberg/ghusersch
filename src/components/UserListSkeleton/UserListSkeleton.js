import styles from './UserListSkeleton.module.css';

const ItemSize = 45;

export default function UserListSkeleton() {
  return (
    <div className={styles.container}>
      {Array.from({ length: ItemSize }).map((_, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.avatar} />
          <div className={styles.name} />
        </div>
      ))}
    </div>
  );
}
