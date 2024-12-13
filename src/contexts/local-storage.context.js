import { createContext, useContext, useEffect, useState } from 'react';

const LocalStorageContext = createContext({});

export function LocalStorageProvider({ children }) {
  const [storageData, setStorageData] = useState({});

  function getItem(key) {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  function setItem(key, value) {
    if (typeof window !== 'undefined') {
      try {
        const valueString =
          typeof value === 'string' ? value : JSON.stringify(value);
        localStorage.setItem(key, valueString);
        setStorageData((prev) => ({ ...prev, [key]: value }));
      } catch (error) {
        console.error('Error saving to local storage:', error);
      }
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const keys = Object.keys(localStorage);
      const data = keys.reduce((acc, key) => {
        const value = localStorage.getItem(key);
        try {
          acc[key] = JSON.parse(value);
        } catch {
          acc[key] = value;
        }
        return acc;
      }, {});

      setStorageData(data);
    }
  }, []);

  return (
    <LocalStorageContext.Provider value={{ getItem, setItem, storageData }}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export function useLocalStorage() {
  return useContext(LocalStorageContext);
}
