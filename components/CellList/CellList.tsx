import styles from './CellList.module.css';
import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CellListItem from '../CellListItem/CellListItem';

const CellList = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  return (
    <div className="cell-list">
      {cells.map((cell) => {
        return (
          <React.Fragment key={cell.id}>
            <CellListItem cell={cell} />
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default CellList;
