import styles from './Home.module.css';
import { Hero, About, GetStarted } from '../../sections';
import WhatsNew from '../../sections/WhatsNew';

const Home = () => {
  return (
    <main className={styles.home_wrapper}>
      <Hero />
      <About />
      <div className="gradient_relative">
        <div className="gradient-04" />
      </div>
      <GetStarted />
      <WhatsNew />
    </main>
  );
};
export default Home;
