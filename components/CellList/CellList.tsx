import styles from './CellList.module.css';
import { useEffect, Fragment } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CellListItem from '../CellListItem/CellListItem';
import AddCell from '../AddCell/AddCell';

const CellList = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  return (
    <div className={`cell-list ${styles.cell_list}`}>
      <AddCell prevCellId={null} forceVisible={cells.length === 0} />
      {cells.map((cell) => {
        return (
          <Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell prevCellId={cell.id} />
          </Fragment>
        );
      })}
    </div>
  );
};
export default CellList;
