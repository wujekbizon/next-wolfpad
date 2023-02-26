import styles from './CellListItem.module.css';
import {
  DynamicExcalidraw,
  DynamicTextEditor,
  DynamicCodeCell,
  DynamicChatBot,
} from '..';
import { Cell } from '../../state/cell';
import ActionBar from '../ActionBar/ActionBar';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  return (
    <div className={styles.cell_list_item}>
      {cell.type === 'code' && (
        <div className="glassmorphism radius">
          <div className={styles.action_bar_wrapper}>
            <ActionBar cell={cell} />
          </div>
          <DynamicCodeCell cell={cell} />
        </div>
      )}
      {cell.type === 'text' && (
        <div className="glassmorphism radius">
          <div>
            <ActionBar cell={cell} />
          </div>
          <DynamicTextEditor cell={cell} />
        </div>
      )}
      {cell.type === 'chatbot' && (
        <div className="glassmorphism radius">
          <div className={styles.action_bar_wrapper}>
            <ActionBar cell={cell} />
          </div>
          <DynamicChatBot />
        </div>
      )}
      {cell.type === 'draw' && (
        <div className="glassmorphism radius">
          <div className={styles.action_bar_wrapper}>
            <ActionBar cell={cell} />
          </div>
          <DynamicExcalidraw />
        </div>
      )}
    </div>
  );
};
export default CellListItem;
