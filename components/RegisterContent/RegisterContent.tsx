import styles from './RegisterContent.module.css';

const RegisterContent = () => {
  return (
    <div className={styles.content_wrappper}>
      <h1 className="gradient_text">
        Signup For Free And
        <br />
        Get Your Premium Account Today
      </h1>

      <p>
        By registering for our Premium plan, You will get unlimited access to
        the latest features, such as: Chatbot AI, Draw a virtual whiteboard for
        sketching, AI Tutor and more.
        <br />
      </p>
    </div>
  );
};
export default RegisterContent;
