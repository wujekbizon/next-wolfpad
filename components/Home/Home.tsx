import styles from './Home.module.css';
import {
  Hero,
  About,
  GetStarted,
  WhatsNew,
  Explore,
  Footer,
  Founder,
} from '../../sections';

const Home = () => {
  return (
    <main className={styles.home_wrapper}>
      <Hero />
      <About />
      <div className="gradient_relative">
        <div className="gradient-03" />
      </div>
      <GetStarted />
      <Explore />
      <div className="gradient_relative">
        <div className="gradient-04" />
      </div>
      <WhatsNew />
      <Founder />
      <Footer />
    </main>
  );
};
export default Home;
