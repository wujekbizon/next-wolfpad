import styles from './Home.module.css';
import { Hero, About, GetStarted } from '../../sections';

const Home = () => {
  return (
    <main className={styles.home_wrapper}>
      <Hero />
      <About />
      <GetStarted />
    </main>
  );
};
export default Home;
