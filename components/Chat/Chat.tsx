import styles from './Chat.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, slideIn } from '../../utils/motion';
import ChatBot from '../ChatBot/ChatBot';
import Image from 'next/image';

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
          variants={fadeIn('down', 'tween', 0.4, 1)}
          className={styles.image_container}
        >
          <div className={`glassmorphism ${styles.content}`}>
            <h1>Get an AI Tutor today</h1>

            <p>
              With the newest addition of GPT-3 Artificial Intelligence to our
              project. You can choose and fully customize, a friendly chabot.
              This is a paid feature and can be only accessible thru our premium
              plan.
            </p>
          </div>
          <Image
            src="/images/chatbot.png"
            alt="chatbot"
            height={550}
            width={600}
            className={styles.content_image}
          />
        </motion.div>
        <div>
          <p>hello</p>
        </div>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={slideIn('left', 'tween', 0.4, 1)}>
          <ChatBot />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Chat;
