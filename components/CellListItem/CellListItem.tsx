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
            <ActionBar id={cell.id} />
          </div>
          <DynamicCodeCell cell={cell} />
        </div>
      )}
      {cell.type === 'text' && (
        <div className="glassmorphism radius">
          <div>
            <ActionBar id={cell.id} />
          </div>
          <DynamicTextEditor cell={cell} />
        </div>
      )}
      {cell.type === 'chatbot' && (
        <div className="glassmorphism radius">
          <div className={styles.action_bar_wrapper}>
            <ActionBar id={cell.id} />
          </div>
          <DynamicChatBot />
        </div>
      )}
      {cell.type === 'draw' && (
        <div className="glassmorphism radius">
          <div className={styles.action_bar_wrapper}>
            <ActionBar id={cell.id} />
          </div>
          <DynamicExcalidraw />
        </div>
      )}
    </div>
  );
};
export default CellListItem;
