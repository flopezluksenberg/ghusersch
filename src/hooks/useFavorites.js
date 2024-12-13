import { useLocalStorage } from '../contexts/local-storage.context';
import { useEffect, useState } from 'react';

const FAVORITES_KEY = 'favorites';

export function useFavorites() {
  const { getItem, setItem, storageData } = useLocalStorage();
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const favorites = JSON.parse(getItem(FAVORITES_KEY)) || [];
      setFavorites(favorites);
    } catch (error) {
      setFavorites([]);
    } finally {
      setIsLoading(false);
    }
  }, [storageData]);

  function addFavorite(id) {
    const currentFavorites = JSON.parse(getItem(FAVORITES_KEY)) || [];
    if (!currentFavorites.includes(id)) {
      setItem(FAVORITES_KEY, JSON.stringify([...currentFavorites, id]));
    }
  }

  function removeFavorite(id) {
    const currentFavorites = JSON.parse(getItem(FAVORITES_KEY)) || [];
    const updatedFavorites = currentFavorites.filter((favId) => favId !== id);
    setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
  }

  function toggleFavorite(id) {
    const currentFavorites = JSON.parse(getItem(FAVORITES_KEY)) || [];
    if (currentFavorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

  function isFavorite(id) {
    const currentFavorites = JSON.parse(getItem(FAVORITES_KEY)) || [];
    return currentFavorites.includes(id);
  }

  return {
    isLoading,
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
