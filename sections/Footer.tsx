import styles from './Footer.module.css';

import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="footer-gradient" />
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
      ></motion.footer>
    </section>
  );
};
export default Footer;
