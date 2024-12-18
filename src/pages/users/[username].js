import Head from 'next/head';
import styles from '../../styles/UserDetailPage.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import UsersClient from '../../clients/users.client';
import UserDetail from '../../components/UserDetail/UserDetail';

export default function UserDetailPage({ user }) {
  return (
    <>
      <Head>
        <title>{user.name} | Fravega</title>
        <meta name="description" content={`${user.name} | Fravega`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <p className={styles.title}>Detalle de usuario</p>
          <UserDetail
            id={user.id}
            username={user.login}
            name={user.name}
            type={user.type}
            img={user.avatar_url}
            location={user.location}
            biography={user.bio}
            email={user.email}
            company={user.company}
            repositories={user.public_repos}
            followers={user.followers}
            following={user.following}
            createdAt={user.created_at}
          />
        </div>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const name = context.query.username;
  const user = await UsersClient.getUser({ name });

  return { props: { user } };
}
