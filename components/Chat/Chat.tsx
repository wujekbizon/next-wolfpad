import styles from './Chat.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import fetchOpenAiApi from '../../helpers/chatApiCalls';
import { generateUniqueId, chatStripe, loader } from '../../helpers/helpers';
import InputForm from './InputForm';

let loadInterval: NodeJS.Timer;

const Chat = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const chatContainerRef = useRef<HTMLElement | null>(null);
  const [isInitializing, setIsInitializing] = useState(false);

  const handleSubmitCallback: React.FormEventHandler<HTMLFormElement> =
    useCallback(async (e) => {
      e.preventDefault();

      if (!formRef.current || !chatContainerRef.current) {
        return;
      }

      const data = new FormData(formRef.current);

      // user's chatstripe
      chatContainerRef.current.innerHTML += chatStripe(
        false,
        data.get('prompt'),
        ''
      );

      // to clear the textarea input
      formRef.current.reset();

      // bot's chatstripe
      const uniqueId = generateUniqueId();
      chatContainerRef.current.innerHTML += chatStripe(true, '', uniqueId);

      // to focus scroll to the bottom
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;

      // specific message div
      const messageDiv = document.getElementById(uniqueId);

      if (!messageDiv) {
        return <p>Loading...</p>;
      }

      const interval = loader(messageDiv, loadInterval);
      //  fetch api
      const response = await fetchOpenAiApi(data, interval, messageDiv);

      if (response.ok) {
        setIsInitializing(true);
      }
    }, []);

  const memoizeKeyPressHandler = useMemo(() => {
    return (e: any) => {
      if (e.keyCode === 13) {
        handleSubmitCallback(e);
      }
    };
  }, [handleSubmitCallback]);

  useEffect(() => {
    const form = formRef.current;
    if (!form) {
      return;
    }
    form.addEventListener('keydown', memoizeKeyPressHandler);

    return () => {
      form.removeEventListener('keydown', memoizeKeyPressHandler);
    };
  }, [memoizeKeyPressHandler]);

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
          <header className={styles.header}>
            <div
              className={
                !isInitializing ? `${styles.line}` : `${styles.online}`
              }
            />
            {!isInitializing ? (
              <h4>Bot initializing ...</h4>
            ) : (
              <h4>Chat Bot Online</h4>
            )}
          </header>
          <section
            className={styles.chat_inner}
            ref={chatContainerRef}
          ></section>
          <InputForm formRef={formRef} onHandleSubmit={handleSubmitCallback} />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Chat;
