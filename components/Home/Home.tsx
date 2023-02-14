import styles from './Home.module.css';
import { Hero, About, GetStarted } from '../../sections';
import WhatsNew from '../../sections/WhatsNew';
import Explore from '../../sections/Explore';
import Footer from '../../sections/Footer';
import Founder from '../../sections/Founder';
import { SidebarMenu } from '../Animation/SidebarMenu';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Home = () => {
  const isMenuOpen = useTypedSelector((state) => state.modals.isMenuOpen);

  return (
    <main className={styles.home_wrapper}>
      {isMenuOpen && <SidebarMenu />}
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
