import styles from './CellList.module.css';
import { Fragment, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import AddCell from '../AddCell/AddCell';
import { useActions } from '../../hooks/useActions';
import CellListItem from '../CellListItem/CellListItem';

const CellList = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, [fetchCells]);

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
