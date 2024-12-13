import '../styles/globals.css';
import { LocalStorageProvider } from '../contexts/local-storage.context';

export default function App({ Component, pageProps }) {
  return (
    <LocalStorageProvider>
      <Component {...pageProps} />
    </LocalStorageProvider>
  );
}
