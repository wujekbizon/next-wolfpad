import styles from './ActionBar.module.css'
import { FiArrowUp, FiArrowDown, FiSave } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import ActionButton from '../ActionButton/ActionButton'
import { useActions } from '../../hooks/useActions'
import { Cell } from '../../state/cell'

interface ActionBarProps {
  cell: Cell
}

const ActionBar: React.FC<ActionBarProps> = ({ cell }) => {
  const { moveCell, deleteCell, saveCells } = useActions()

  return (
    <div className={styles.action_bar}>
      {cell.type === 'code' && <ActionButton icon={<FiSave />} onClick={() => saveCells()} />}

      <ActionButton
        icon={<FiArrowUp />}
        onClick={() =>
          moveCell({
            id: cell.id,
            direction: 'up',
          })
        }
      />
      <ActionButton
        icon={<FiArrowDown />}
        onClick={() =>
          moveCell({
            id: cell.id,
            direction: 'down',
          })
        }
      />
      <ActionButton icon={<MdClose />} onClick={() => deleteCell(cell.id)} />
    </div>
  )
}
export default ActionBar
