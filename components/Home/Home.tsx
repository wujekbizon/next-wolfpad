import styles from './Home.module.css';
import Hero from '../../sections/Hero';

const Home = () => {
  return (
    <main className={styles.home_wrapper}>
      <Hero />
    </main>
  );
};
export default Home;
