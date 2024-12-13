import Head from 'next/head';
import styles from '../styles/Error500.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Work_Sans } from 'next/font/google';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const workSans = Work_Sans({
  variable: '--work-sans',
  subsets: ['latin'],
});

export default function Error500() {
  return (
    <>
      <Head>
        <title>Algo salió mal | Fravega</title>
        <meta name="description" content="Algo salió mal | Fravega" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.container} ${workSans.variable}`}>
        <Header />
        <div className={`${styles.content}`}>
          <ErrorMessage
            title={'Algo salió mal'}
            description={
              'En estos momentos estamos teniendo dificultades técnicas. Por favor, espere unos minutos e intentelo nuevamente'
            }
          />
        </div>
        <Footer />
      </div>
    </>
  );
}