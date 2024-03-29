import styles from './Hero.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staggerContainer, textTitleVariant, slideIn, fadeIn } from '../utils/motion'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Hero = () => {
  const session = useSession()

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
        <motion.div variants={fadeIn('up', 'tween', 0.8, 1)} className={styles.btn_wrapper}>
          {session.status === 'unauthenticated' && (
            <Link href="/signup" className={styles.register_btn}>
              Register New Account
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
