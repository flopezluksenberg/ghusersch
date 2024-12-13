import { useEffect, useState } from 'react';
import UsersClient from '../clients/users.client';
import { useFavorites } from './useFavorites';
import useDebounce from './useDebounce';

export default function useUserList({ size = 30 } = {}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { toggleFavorite, isFavorite } = useFavorites();

  const debouncedQuery = useDebounce(query);

  useEffect(() => {
    onLoadUsers({ page: currentPage, query });
  }, [debouncedQuery, currentPage]);

  useEffect(() => {
    setUsers([]);
    setHasNextPage(true);
    setCurrentPage(1);
  }, [debouncedQuery]);

  async function fetchUserList({ page, size }) {
    const offset = (page - 1) * size;

    return await UsersClient.getUserList({
      size,
      offset,
    });
  }

  async function searchUser({ page, size, query }) {
    return await UsersClient.searchUsers({ page, size, query });
  }

  async function fetchUsers({ page, query }) {
    const fetchedUsers = await (!!query
      ? searchUser({ page, size, query })
      : fetchUserList({ page, size }));

    return fetchedUsers.map((user) => ({
      ...user,
      is_favorite: isFavorite(user.id),
    }));
  }

  async function onLoadUsers({ page, query }) {
    setIsLoading(true);

    try {
      const fetchedUsers = await fetchUsers({ page, query });

      if (fetchedUsers.length < size) {
        setHasNextPage(false);
      }

      setUsers((prevState) => [...prevState, ...fetchedUsers]);
    } catch (error) {
      setError(error);
      setHasNextPage(false);
    } finally {
      setIsLoading(false);
    }
  }

  function onNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function onMarkAsFavoriteClick(id) {
    toggleFavorite(id);
    setUsers((prevState) =>
      prevState.map((user) => ({
        ...user,
        is_favorite: isFavorite(user.id),
      })),
    );
  }

  return {
    currentPage,
    isLoading,
    isFirstLoading: isLoading && currentPage === 1,
    isEmpty: users.length === 0,
    error,
    users,
    hasNextPage,
    query,
    setQuery,
    onNextPage,
    onMarkAsFavoriteClick,
  };
}
