import styles from './ProgressBar.module.css';

const ProgressBar = ({ text }: { text?: string }) => {
  return (
    <div className={styles.progress_cover}>
      <progress className={styles.progress} max="100">
        {text}
      </progress>
    </div>
  );
};
export default ProgressBar;
