import { Cell } from '../../state/cell';
import TextEditor from '../TextEditor/TextEditor';
import CodeCell from '../CodeCell/CodeCell';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  return (
    <div className="cell-list-item">
      {cell.type === 'code' ? (
        <>
          <div className="action-bar-wrapper">
            {/* <ActionBar id={cell.id} /> */}
          </div>
          <CodeCell cell={cell} />
        </>
      ) : (
        <>
          <div>{/* <ActionBar id={cell.id} /> */}</div>
          <TextEditor cell={cell} />
        </>
      )}
    </div>
  );
};
export default CellListItem;
