import styles from './ActionButton.module.css';

export interface ActionButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, onClick }) => {
  return (
    <button className={styles.action_btn} onClick={onClick}>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
};

export default ActionButton;
