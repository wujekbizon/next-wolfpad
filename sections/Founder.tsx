import styles from './Founder.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import Image from 'next/image';
import { MdFlipCameraAndroid } from 'react-icons/md';

const Founder = () => {
  const [imageActive, setImageActive] = useState(false);

  return (
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
            <p className={styles.company}>Founder of Wolfpad</p>
          </div>

          <p className={styles.content}>
            “What is Wolfpad ?
            <br />
            It started as a simple coding project. Then I decided to continue
            with development, and add new features.Now with the latest addition
            of AI, it has become a very powerful and useful tool.”
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className={styles.founder_image_container}
        >
          {' '}
          {imageActive ? (
            <Image
              width={600}
              height={610}
              src="/images/founder.jpg"
              alt="planet-09"
              className={styles.founder_image}
            />
          ) : (
            <Image
              width={600}
              height={610}
              src="/images/me.png"
              alt="planet-09"
              className={styles.founder_image}
            />
          )}
          <motion.div variants={zoomIn(0.4, 1)} className={`${styles.stamp}`}>
            <Image
              width={100}
              height={100}
              src="/images/wolfpad.png"
              alt="stamp"
              className={styles.image}
            />
          </motion.div>
          <MdFlipCameraAndroid
            className={styles.icon}
            onClick={() => setImageActive(!imageActive)}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Founder;
