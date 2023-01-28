import styles from './CellListItem.module.css';
import { Cell } from '../../state/cell';
import TextEditor from '../TextEditor/TextEditor';
import CodeCell from '../CodeCell/CodeCell';
import ActionBar from '../ActionBar/ActionBar';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  return (
    <div className={styles.cell_list_item}>
      {cell.type === 'code' ? (
        <>
          <div className={styles.action_bar_wrapper}>
            <ActionBar id={cell.id} />
          </div>
          <CodeCell cell={cell} />
        </>
      ) : (
        <>
          <div>
            <ActionBar id={cell.id} />
          </div>
          <TextEditor cell={cell} />
        </>
      )}
    </div>
  );
};
export default CellListItem;
