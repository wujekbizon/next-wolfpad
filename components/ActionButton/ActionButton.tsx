export interface ActionButtonProps {
  icon: JSX.Element;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, onClick }) => {
  return (
    <button className="button is-primary is-small" onClick={onClick}>
      <span className="icon">{icon}</span>
    </button>
  );
};

export default ActionButton;
