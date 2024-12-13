import { createContext, useState, useEffect, useContext } from 'react';

const LocalStorageContext = createContext({});

const Keys = {
  FAVORITES: 'favorites',
};

export function LocalStorageProvider({ children }) {
  const [storageData, setStorageData] = useState({});

  function getItem(key) {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key);
      try {
        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.error('Error parsing local storage json:', error);
        return null;
      }
    }
    return null;
  }

  function setItem(key, value) {
    if (typeof window !== 'undefined') {
      try {
        const valueString = JSON.stringify(value);
        localStorage.setItem(key, valueString);
        setStorageData((prev) => ({ ...prev, [key]: value }));
      } catch (error) {
        console.error('Error saving local storage json:', error);
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = getItem(Keys.FAVORITES);

      setStorageData((prev) => ({
        ...prev,
        [Keys.FAVORITES]: data,
      }));
    }
  }, []);

  return (
    <LocalStorageContext.Provider value={{ getItem, setItem, storageData }}>
      {children}
    </LocalStorageContext.Provider>
  );
}

LocalStorageProvider.Keys = Keys;

export function useLocalStorage() {
  return useContext(LocalStorageContext);
}
