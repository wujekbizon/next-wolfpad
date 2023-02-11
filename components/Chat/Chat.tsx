import styles from './Chat.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, zoomIn } from '../../utils/motion';
import ChatBot from '../ChatBot/ChatBot';
import Image from 'next/image';
import Divider from '../Layout/Divider';

const Chat = () => {
  return (
    <section className={styles.chat_section}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.content_container}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.3, 1)}
          className={styles.content_title}
        >
          <p>
            With the newest addition of GPT-3 Artificial Intelligence to our
            project. You can choose and fully customize, a friendly chabot. This
            is a paid feature and can be only accessible thru our premium plan.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.4, 1)}
          className={styles.image_container}
        >
          <motion.div
            variants={zoomIn(0.8, 1)}
            className={`glassmorphism ${styles.content}`}
          >
            <h1>Get an AI Tutor today</h1>
          </motion.div>
          <Image
            src="/images/chatbot.png"
            alt="chatbot"
            height={550}
            width={600}
            className={styles.content_image}
          />
        </motion.div>
      </motion.div>
      <Divider title="CHATBOT OPENAI" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={styles.bot_container}>
          <motion.div
            variants={fadeIn('right', 'tween', 0.4, 1)}
            className={styles.bot}
          >
            <ChatBot />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.4, 1)}
            className={styles.text}
          >
            <p>
              Let's try it out, the newest chatbot, that's using latest AI
              technology, developed by OpenAI.
            </p>
            <p>
              We got in plans to add more AI chatbots : Prometheus AI, Bard AI
              or GPT-4
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Chat;
