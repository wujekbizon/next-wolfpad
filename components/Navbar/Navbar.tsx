import styles from './Navbar.module.css';
import { navLinks } from '../../data/links';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import { motion } from 'framer-motion';
import { navVariants } from '../../utils/motion';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(0);
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
          <Image
            src="/images/wolfpad.png"
            alt="wolfpad"
            width={80}
            height={80}
            className={styles.logo}
          />

          <Logo title=".wolfpad" />
        </div>

        <ul className={styles.nav_links}>
          {navLinks.map((link, index) => (
            <li
              className={
                active === index
                  ? `${styles.active} ${styles.link_btn}`
                  : `${styles.link_btn}`
              }
              key={link.id}
              onClick={() => setActive(index)}
            >
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
