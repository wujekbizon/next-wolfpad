import styles from './Chat.module.css'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn, textTitleVariant } from '../../utils/motion'
import Image from 'next/image'
import Divider from '../Layout/Divider'
import Link from 'next/link'

const Chat = () => {
  return (
    <>
      <section className={styles.chat_title}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={styles.chat_title_container}
        >
          <motion.h1 variants={fadeIn('up', 'tween', 0.2, 1)} className={`${styles.wolfpadai_title}  gradient_text`}>
            WolfpadAI Chatbot
          </motion.h1>

          <motion.p variants={fadeIn('up', 'tween', 0.4, 1)} className={`glassmorphism`}>
            {' '}
            Introducing WolfpadAI Chatbot - a cutting-edge artificial intelligence platform that harnesses the power of
            OpenAI to deliver unparalleled human-like conversation simulation through its advanced natural language
            processing and machine learning algorithms. Discover a new era of interactive and intelligent communication.
          </motion.p>
        </motion.div>
      </section>
      <Divider />
      <section className={styles.chat_section}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={styles.content_container}
        >
          <motion.div className={styles.content_title}>
            <motion.p className={`glassmorphism  ${styles.tutor_text}`} variants={zoomIn(0.3, 1)}>
              With the newest addition of <span className={styles.tutor_span}> GPT-4 </span> to our project. You can
              choose and fully customize, a friendly chabot. This is a paid feature and can be only accessible through
              our premium plan.
            </motion.p>
          </motion.div>
          <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className={styles.image_container}>
            <motion.div
              animate={{
                transformOrigin: ['50%', '50%'],
                x: [0, -30, 15, -15, 9, -6, 0],
                rotate: [0, -6, 6, -3.6, 2.4, -1.2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              variants={zoomIn(0.5, 1)}
              className={`glassmorphism ${styles.content}`}
            >
              <Link href="/wolfpad/tutor">
                <h1>Get an AI Tutor today</h1>
              </Link>
            </motion.div>

            <Image src="/images/chatbot.png" alt="chatbot" height={400} width={400} className={styles.content_image} />
          </motion.div>
        </motion.div>
        {/* <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
         <div className={styles.bot_container}>
            <motion.div variants={fadeIn('left', 'tween', 0.4, 1)} className={` ${styles.text}`}>
              <p>Let&apos;s try it out, the newest chatbot, that&apos;s using latest AI technology.</p>
            </motion.div>
          </div> 
        </motion.div>  */}
      </section>
    </>
  )
}

export default Chat
