import styles from './Founder.module.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import Image from 'next/image';

const Founder = () => (
  <section className={styles.founder} id="founder">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.founder_container}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className={`gradient-05 ${styles.founder_content_wrapper}`}
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className={styles.name}>Gregory</h4>
          <p className={styles.company}>Founder Wolfpad</p>
        </div>

        <p className={styles.content}>
          “What is a Wolfpad ?
          <br />
          It's started as a simple coding project. Then I decided to continue
          with development, and started work on adding new features. Now with
          the latest AI addition, it became a very powerfull and useful tool.”
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className={styles.founder_image_container}
      >
        <Image
          width={600}
          height={610}
          src="/images/me.png"
          alt="planet-09"
          className={styles.founder_image}
        />

        <motion.div variants={zoomIn(0.4, 1)} className={styles.stamp}>
          <Image width={150} height={150} src="/images/stamp.png" alt="stamp" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Founder;
