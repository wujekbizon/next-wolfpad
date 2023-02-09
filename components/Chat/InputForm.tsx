import styles from './InputForm.module.css';
import Image from 'next/image';
import Resizable from '../Resizable/Resizable';

type InputFormProps = {
  onHandleSubmit: React.FormEventHandler<HTMLFormElement>;
  formRef: React.MutableRefObject<HTMLFormElement | null>;
};

const InputForm = ({ onHandleSubmit, formRef }: InputFormProps) => {
  return (
    <>
      {/* <Resizable direction="vertical"> */}
      <form className={styles.form} onSubmit={onHandleSubmit} ref={formRef}>
        <textarea name="prompt" placeholder="Ask Jarvis..."></textarea>
        <button className={styles.send}>
          <Image src="/images/send.svg" alt="send" width={40} height={70} />
        </button>
      </form>
      {/* </Resizable> */}
    </>
  );
};
export default InputForm;
