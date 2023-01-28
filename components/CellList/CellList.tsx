import styles from './CellList.module.css';
import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CellListItem from '../CellListItem/CellListItem';
import AddCell from '../AddCell/AddCell';

const CellList = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  return (
    <div className={styles.cell_list}>
      <AddCell prevCellId={null} forceVisible={cells.length === 0} />
      {cells.map((cell) => {
        return (
          <React.Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell prevCellId={cell.id} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default CellList;
