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
      <form
        className={`${styles.form}`}
        onSubmit={onHandleSubmit}
        ref={formRef}
      >
        <textarea name="prompt" placeholder="How Can I Help You?"></textarea>
        <button className={styles.send}>
          <Image src="/images/send.svg" alt="send" width={25} height={25} />
        </button>
      </form>
    </>
  );
};
export default InputForm;
