import styles from './ActionButton.module.css';

export interface ActionButtonProps {
  icon: JSX.Element;
  onClick: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <button className={`${className} ${styles.action_btn}`} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};

export default ActionButton;
