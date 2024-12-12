import styles from './UserList.module.css';
import UserItem from '../UserItem/UserItem';
import useUserList from '../../hooks/useUserList';
import Button from '../Button/Button';
import UserListSkeleton from '../UserListSkeleton/UserListSkeleton';

export default function UserList() {
  const { isLoading, isFirstLoading, error, users, hasNextPage, onNextPage } =
    useUserList();

  return (
    <div className={styles.container}>
      {isFirstLoading && <UserListSkeleton />}
      {!isFirstLoading && (
        <>
          <div className={styles.content}>
            {users.map((user, index) => (
              <div className={styles.item} key={index}>
                <UserItem
                  name={user.login}
                  type={user.type}
                  img={user.avatar_url}
                />
              </div>
            ))}
          </div>

          {hasNextPage && (
            <Button
              className={styles.button}
              disabled={isLoading}
              onClick={onNextPage}
            >
              Cargar más
            </Button>
          )}
        </>
      )}
    </div>
  );
}
