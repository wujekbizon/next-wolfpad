import styles from './ActionBar.module.css';
import { FiArrowUp, FiArrowDown, FiSave } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import ActionButton from '../ActionButton/ActionButton';
import { useActions } from '../../hooks/useActions';

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell, saveCells } = useActions();
  return (
    <div className={styles.action_bar}>
      <ActionButton icon={<FiSave />} onClick={() => saveCells()} />
      <ActionButton
        icon={<FiArrowUp />}
        onClick={() =>
          moveCell({
            id,
            direction: 'up',
          })
        }
      />
      <ActionButton
        icon={<FiArrowDown />}
        onClick={() =>
          moveCell({
            id,
            direction: 'down',
          })
        }
      />
      <ActionButton icon={<MdClose />} onClick={() => deleteCell(id)} />
    </div>
  );
};
export default ActionBar;
