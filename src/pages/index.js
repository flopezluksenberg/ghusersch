import Head from 'next/head';
import { Work_Sans } from 'next/font/google';
import styles from '../styles/Home.module.css';
import UserList from '../components/UserList/UserList';
import SearchBox from '../components/SearchBox/SearchBox';
import Header from '../components/Header/Header';

const workSans = Work_Sans({
  variable: '--work-sans',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Fravega Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.container} ${workSans.variable}`}>
        <div className={styles.search}>
          <Header />
          <SearchBox
            placeholder={'Buscar usuarios por nombre'}
            onChange={console.log}
            value={''}
            onClear={console.log}
          />
        </div>
        <div className={`${styles.content}`}>
          <UserList />
        </div>
      </div>
    </>
  );
}
