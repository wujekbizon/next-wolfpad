import styles from './Founder.module.css'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion'
import Image from 'next/image'

const Founder = () => {
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
            <h4 className={styles.name}>Greg Wolfinger</h4>
            <p className={styles.company}>Founder of Wolfpad</p>
          </div>

          <p className={styles.content}>
            When I initially embarked on the coding project that would later become Wolfpad, little did I know how it
            would evolve. Over time, I dedicated myself to its development and gradually introduced new features. Today,
            with the integration of advanced AI technology, Wolfpad has transformed into an incredibly potent and
            indispensable tool. As the founder, I strive to consistently improve and refine the project, ensuring its
            continuous growth and enhanced user experience.
          </p>
        </motion.div>

        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className={styles.founder_image_container}>
          <Image
            width={600}
            height={250}
            src="/images/founder.jpg"
            alt="Greg Wolfinger"
            className={styles.founder_image}
          />

          <motion.div variants={zoomIn(0.4, 1)} className={`${styles.stamp}`}>
            <Image width={100} height={100} src="/images/wolfpad.png" alt="stamp" className={styles.image} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Founder
