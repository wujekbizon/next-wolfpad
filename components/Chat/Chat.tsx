import styles from './Chat.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { useRef } from 'react';

import InputForm from './InputForm';

const Chat = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (
    event
  ) => {
    event.preventDefault();
  };

  return (
    <main className={styles.chat}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.content_container}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.4, 1)}
          className={styles.content_wrapper}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>Chat</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              suscipit totam aspernatur inventore neque ipsa aliquid deserunt
              vero, quasi at aut pariatur eaque blanditiis minima molestiae
              molestias optio iusto! Ut.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.4, 1)}
          className={styles.chat_container}
        >
          <InputForm formRef={formRef} onHandleSubmit={submitFormHandler} />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Chat;
