import styles from './Home.module.css';
import { useState } from 'react';
import Link from 'next/link';
import { Hero, About, GetStarted } from '../../sections';
import WhatsNew from '../../sections/WhatsNew';
import Explore from '../../sections/Explore';
import Footer from '../../sections/Footer';
import Founder from '../../sections/Founder';
import { navLinks } from '../../data/links';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className={styles.home_wrapper}>
      {menuOpen && (
        <div className={styles.side_menu}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
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
