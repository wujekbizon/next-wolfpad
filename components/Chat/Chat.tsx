import styles from './Chat.module.css';
import { motion } from 'framer-motion';
import {
  staggerContainer,
  fadeIn,
  zoomIn,
  textTitleVariant,
} from '../../utils/motion';
import ChatBot from '../ChatBot/ChatBot';
import Image from 'next/image';
import Divider from '../Layout/Divider';

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
          <motion.h1 variants={textTitleVariant(0.8)} className="gradient_text">
            OpenAi Chatbot
          </motion.h1>

          <motion.p variants={fadeIn('up', 'tween', 0.6, 1)}>
            {' '}
            OpenAI Chatbot is an artificial intelligence system that can
            simulate human conversation by using natural language processing and
            machine learning algorithms.
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
          <motion.div
            variants={fadeIn('right', 'tween', 0.6, 1)}
            className={styles.content_title}
          >
            <p className={styles.tutor_text}>
              With the newest addition of GPT-3 Artificial Intelligence to our
              project. You can choose and fully customize, a friendly chabot.
              This is a paid feature and can be only accessible thru our premium
              plan.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className={styles.image_container}
          >
            <motion.div
              variants={zoomIn(0.4, 1)}
              className={`glassmorphism ${styles.content}`}
            >
              <h1>Get an AI Tutor today</h1>
            </motion.div>

            <Image
              src="/images/chatbot.png"
              alt="chatbot"
              height={450}
              width={400}
              className={styles.content_image}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className={styles.bot_container}>
            <motion.div
              variants={fadeIn('right', 'tween', 0.6, 1)}
              className={styles.bot}
            >
              <ChatBot />
            </motion.div>
            <motion.div
              variants={fadeIn('left', 'tween', 0.4, 1)}
              className={styles.text}
            >
              <p>
                Let&apos;s try it out, the newest chatbot, that&apos;s using
                latest AI technology, developed by OpenAI.
              </p>
              <p>
                We got in plans to add more AI chatbots:
                <br />
                Prometheus AI, Bard AI or GPT-4
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <Divider />
    </>
  );
};

export default Chat;
