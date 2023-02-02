import styles from './ProgressBar.module.css';

const ProgressBar = ({ text }: { text?: string }) => {
  return (
    <div className={styles.progress_cover}>
      <h1>{text}</h1>
      <progress className={styles.progress} max="100"></progress>
    </div>
  );
};
export default ProgressBar;
