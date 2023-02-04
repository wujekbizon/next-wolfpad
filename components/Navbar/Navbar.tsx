import styles from './Navbar.module.css';
import { navLinks } from '../../data/links';
import Link from 'next/link';
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <header className={styles.header_container}>
      <nav className={styles.nav_center}>
        <Link href="/">
          <Logo title="Wolfpad" />
        </Link>

        <ul className={styles.nav_links}>
          {navLinks.map((link) => (
            <li className={styles.link_btn} key={link.id}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button>Sign in</button>
      </nav>
    </header>
  );
};

export default Navbar;
