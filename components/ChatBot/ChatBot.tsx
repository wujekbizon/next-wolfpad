import styles from './ChatBot.module.css';
import InputForm from '../Chat/InputForm';
import { useRef, useEffect, useMemo, useCallback, useState } from 'react';
import fetchOpenAiApi from '../../helpers/chatApiCalls';
import { generateUniqueId, chatStripe, loader } from '../../helpers/helpers';
import Resizable from '../Resizable/Resizable';

let loadInterval: NodeJS.Timer;

const ChatBot = () => {
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
    <>
      <Resizable direction="vertical">
        <div className={`${styles.chat_container}`}>
          <header className={styles.header}>
            <div
              className={
                !isInitializing ? `${styles.line}` : `${styles.online}`
              }
            />
            {!isInitializing ? (
              <h4>Chat Bot Initializing ...</h4>
            ) : (
              <h4>Chat Bot Online</h4>
            )}
          </header>
          <section
            className={`${styles.chat_inner}`}
            ref={chatContainerRef}
          ></section>
          <InputForm formRef={formRef} onHandleSubmit={handleSubmitCallback} />
        </div>
      </Resizable>
    </>
  );
};
export default ChatBot;
