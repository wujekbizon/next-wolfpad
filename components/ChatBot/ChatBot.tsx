import styles from './ChatBot.module.css';
import InputForm from '../Chat/InputForm';

type ChatBotProps = {
  isInitializing: boolean;
  formRef: React.MutableRefObject<HTMLFormElement | null>;
  chatContainerRef: React.MutableRefObject<HTMLElement | null>;
  handleSubmitCallback: React.FormEventHandler<HTMLFormElement>;
};

const ChatBot = ({
  isInitializing,
  chatContainerRef,
  formRef,
  handleSubmitCallback,
}: ChatBotProps) => {
  return (
    <>
      <header className={styles.header}>
        <div
          className={!isInitializing ? `${styles.line}` : `${styles.online}`}
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
    </>
  );
};
export default ChatBot;
