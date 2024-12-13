import styles from './UserList.module.css';
import UserItem from '../UserItem/UserItem';
import useUserList from '../../hooks/useUserList';
import Button from '../Button/Button';
import UserListSkeleton from '../UserListSkeleton/UserListSkeleton';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBox from '../SearchBox/SearchBox';

export default function UserList() {
  const {
    error,
    isLoading,
    isFirstLoading,
    users,
    hasNextPage,
    query,
    setQuery,
    onMarkAsFavoriteClick,
    onNextPage,
  } = useUserList();

  return (
    <div
      className={`${styles.container} ${!!error ? styles['container--has-error'] : ''}`}
    >
      <div className={styles.search}>
        <SearchBox
          placeholder={'Buscar usuarios por nombre'}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onClear={() => setQuery('')}
        />
      </div>
      <p className={styles.title}>Lista de usuarios</p>
      {!!error && <ErrorMessage />}
      {!error && isFirstLoading && <UserListSkeleton />}
      {!error && !isFirstLoading && (
        <>
          <div className={styles.content}>
            {users.map((user, index) => (
              <div className={styles.item} key={index}>
                <UserItem
                  id={user.id}
                  name={user.login}
                  type={user.type}
                  img={user.avatar_url}
                  isFavorite={user.is_favorite}
                  onMarkAsFavoriteClick={onMarkAsFavoriteClick}
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
