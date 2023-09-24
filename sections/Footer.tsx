import styles from './Footer.module.css'
import { socials } from '../data/features'
import { motion } from 'framer-motion'
import { footerVariants } from '../utils/motion'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../components/Logo/Logo'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="footer-gradient" />
      <motion.footer variants={footerVariants} initial="hidden" whileInView="show">
        <div className={styles.footer_container}>
          <div className={styles.footer_title}>
            <h4 className={styles.title}>Start Using Wolfpad Today</h4>
            <Link href="/wolfpad">
              <button type="button" className={`glassmorphism ${styles.btn}`}>
                <Image width={24} height={24} src="/images/icons/headset.svg" alt="headset" />
                <span className={styles.span}>Enter Wolfpad</span>
              </button>
            </Link>
          </div>

          <div className={styles.footer_socials}>
            <div className={styles.divider} />

            <div className={styles.socials_container}>
              <div className={styles.logo_container}>
                <Image src="/images/wolfpad.png" alt="wolfpad" width={80} height={80} className={styles.logo} />

                <Logo title=".wolfpad" />
              </div>
              <p className={styles.socials_rights}>Copyright © 2023 Wolfpad. All rights reserved.</p>

              <div className={styles.socials_icons}>
                {socials.map((social) => (
                  <Image
                    key={social.name}
                    src={social.url}
                    width={24}
                    height={24}
                    alt={social.name}
                    className={styles.icons}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}
export default Footer
