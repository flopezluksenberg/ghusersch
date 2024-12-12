import { useEffect, useState } from 'react';
import UsersClient from '../clients/users.client';
import useDebounce from './useDebounce';

export default function useSearch({ size = 30 } = {}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState('');
  const [hasNextPage, setHasNextPage] = useState(true);

  const debouncedName = useDebounce(name);

  async function fetchUsers({ name, page }) {
    setIsLoading(true);

    try {
      const offset = page * size;
      const fetchedUsers = await UsersClient.getUsers({
        name,
        size,
        offset,
      });

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

  useEffect(() => {
    setUsers([]);
    setHasNextPage(true);
    setCurrentPage(0);
  }, [debouncedName]);

  useEffect(() => {
    fetchUsers({ name: debouncedName, page: currentPage });
  }, [debouncedName, currentPage]);

  function onNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return {
    isLoading,
    error,
    users,
    name,
    setName,
    hasNextPage,
    onNextPage,
  };
}
