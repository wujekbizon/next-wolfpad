import styles from './Divider.module.css';

type DividerProps = {
  title?: string;
  className?: string;
};

const Divider = ({ title, className }: DividerProps) => {
  return (
    <div className={`glassmorphism ${className} ${styles.divider}`}>
      <h1>{title}</h1>
    </div>
  );
};
export default Divider;
