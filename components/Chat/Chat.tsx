import styles from './Chat.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import fetchOpenAiApi from '../../helpers/chatApiCalls';
import { generateUniqueId, chatStripe, loader } from '../../helpers/helpers';
import ChatBot from '../ChatBot/ChatBot';
import Image from 'next/image';

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
      </motion.div>
      <div className={styles.chat_container}>
        <ChatBot
          isInitializing={isInitializing}
          formRef={formRef}
          chatContainerRef={chatContainerRef}
          handleSubmitCallback={handleSubmitCallback}
        />
      </div>
    </section>
  );
};

export default Chat;
