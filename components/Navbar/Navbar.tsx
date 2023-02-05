import styles from './Navbar.module.css';
import { navLinks } from '../../data/links';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import Image from 'next/image';

const Navbar = () => {
  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={styles.header_container}
    >
      <div className={`${styles.navbar_gradient} gradient-01 `} />
      <nav className={styles.nav_center}>
        <div className={styles.image_container}>
          <Link href="/">
            <Image
              src="/images/wolfpad.png"
              alt="wolfpad"
              width={80}
              height={80}
              className={styles.logo}
            />
          </Link>
          <Logo title="Wolfpad" />
        </div>

        <ul className={styles.nav_links}>
          {navLinks.map((link) => (
            <li className={styles.link_btn} key={link.id}>
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <button>Sign in</button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
