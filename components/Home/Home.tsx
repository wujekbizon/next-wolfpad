import styles from './Home.module.css';
import { Hero, About } from '../../sections';

const Home = () => {
  return (
    <main className={styles.home_wrapper}>
      <Hero />
      <About />
    </main>
  );
};
export default Home;
