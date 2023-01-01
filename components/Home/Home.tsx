import styles from './Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={styles.home_wrapper}>
      <div>
        <h1>Home Page</h1>
      </div>
      <button>
        <Link href="wolfpad">Wolfpad</Link>
      </button>
    </main>
  );
};
export default Home;
