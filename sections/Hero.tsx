import styles from './Hero.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, textTitleVariant, slideIn } from '../utils/motion'

const Hero = () => {
  return (
    <section className={styles.hero_wrapper}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.hero_container}
      >
        <div className={styles.hero_title}>
          <motion.h1 variants={textTitleVariant(1.1)}>Wolfpad</motion.h1>

          <motion.h2 variants={textTitleVariant(1.2)}>Interactive Coding Enviorment</motion.h2>
        </div>
        <motion.div variants={slideIn('left', 'tween', 0.3, 1)} className={styles.image_motion}>
          <div className={`${styles.image_container} submenu-gradient`} />
          <Image
            src="/images/pc2png.png"
            width={1050}
            height={950}
            alt="code"
            className={styles.image}
            priority={true}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
