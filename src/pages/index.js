import Head from 'next/head';
import styles from '../styles/HomePage.module.css';
import UserList from '../components/UserList/UserList';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lista de usuarios | Fravega</title>
        <meta name="description" content="Lista de usuarios | Fravega" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <div className={`${styles.content}`}>
          <p className={styles.title}>Lista de usuarios</p>
          <UserList />
        </div>
        <Footer />
      </div>
    </>
  );
}
