import styles from './StartSteps.module.css';

type Props = {
  number: string;
  text: string;
};
const StartSteps = ({ number, text }: Props) => {
  return (
    <div className={styles.container}>
      <div className={`submenu-gradient ${styles.item_wrapper}`}>
        <p className={styles.item}>{number}</p>
      </div>
      <p className={styles.content}>{text}</p>
    </div>
  );
};
export default StartSteps;
