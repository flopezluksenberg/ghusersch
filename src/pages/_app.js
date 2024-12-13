import '../styles/globals.css';
import { LocalStorageProvider } from '../contexts/local-storage.context';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({
  variable: '--work-sans',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <LocalStorageProvider>
      <div className={workSans.variable}>
        <Component {...pageProps} />
      </div>
    </LocalStorageProvider>
  );
}
