import { useEffect, useState } from 'react';
import UsersClient from '../clients/users.client';

export default function useUserList({ size = 30 } = {}) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchUsers({ page }) {
    setIsLoading(true);

    try {
      const offset = page * size;
      const fetchedUsers = await UsersClient.getUserList({
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
    fetchUsers({ page: currentPage });
  }, [currentPage]);

  function onNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return {
    currentPage,
    isLoading,
    isFirstLoading: isLoading && currentPage === 0,
    error,
    users,
    hasNextPage,
    onNextPage,
  };
}
