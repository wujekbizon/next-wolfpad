import styles from './CellListItem.module.css';
import { Cell } from '../../state/cell';
import TextEditor from '../TextEditor/TextEditor';
import CodeCell from '../CodeCell/CodeCell';
import ActionBar from '../ActionBar/ActionBar';
import ChatBot from '../ChatBot/ChatBot';
import Excalidraw from '../Excalidraw/Excalidraw';

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
          <CodeCell cell={cell} />
        </div>
      )}
      {cell.type === 'text' && (
        <div className="glassmorphism radius">
          <div>
            <ActionBar id={cell.id} />
          </div>
          <TextEditor cell={cell} />
        </div>
      )}
      {cell.type === 'chatbot' && (
        <div className="glassmorphism radius">
          <div className={styles.action_bar_wrapper}>
            <ActionBar id={cell.id} />
          </div>
          <ChatBot />
        </div>
      )}
      {cell.type === 'draw' && (
        <div className="glassmorphism radius">
          <div className={styles.action_bar_wrapper}>
            <ActionBar id={cell.id} />
          </div>
          <Excalidraw />
        </div>
      )}
    </div>
  );
};
export default CellListItem;
