import styles from './Home.module.css';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  textTitleVariant,
  slideIn,
} from '../../utils/motion';

const Home = () => {
  return (
    <main className={styles.home_wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={styles.hero_title}>
          <motion.h1 variants={textTitleVariant(1.1)}>Wolfpad</motion.h1>

          <motion.h2 variants={textTitleVariant(1.2)}>
            Interactive Coding Enviorment
          </motion.h2>
        </div>
        <motion.div
          variants={slideIn('left', 'tween', 0.3, 1)}
          className={styles.image_motion}
        >
          <div className={`${styles.image_container} submenu-gradient`} />
          <img src="/images/code.jpg" alt="code" className={styles.image} />
        </motion.div>
      </motion.div>
    </main>
  );
};
export default Home;
