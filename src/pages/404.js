import Head from 'next/head';
import styles from '../styles/Error404.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Work_Sans } from 'next/font/google';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const workSans = Work_Sans({
  variable: '--work-sans',
  subsets: ['latin'],
});

export default function Error404() {
  return (
    <>
      <Head>
        <title>Página no encontrada | Fravega</title>
        <meta name="description" content="Página no encontrada | Fravega" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.container} ${workSans.variable}`}>
        <Header />
        <div className={`${styles.content}`}>
          <ErrorMessage
            title={'Página no encontrada'}
            description={
              'Al parecer la página que esta queriendo acceder no existe. Por favor, revise la URL e inténtelo nuevamente'
            }
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
