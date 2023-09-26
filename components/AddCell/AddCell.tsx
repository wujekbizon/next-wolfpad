import styles from './AddCell.module.css'
import { cellButtons } from '../../data/links'
import { useActions } from '../../hooks/useActions'

interface AddCellProps {
  prevCellId: string | null
  forceVisible?: boolean
}

const AddCell: React.FC<AddCellProps> = ({ prevCellId, forceVisible }) => {
  const { insertCellAfter } = useActions()

  return (
    <div className={`${forceVisible && styles.force_visible} ${styles.add_cell}`}>
      <div className={styles.add_buttons}>
        {cellButtons.map(({ id, type, cellName }) => (
          <button key={id} className={styles.add_btn} onClick={() => insertCellAfter({ id: prevCellId, type })}>
            <span>{cellName}</span>
          </button>
        ))}
      </div>
      <div className={styles.divider} />
    </div>
  )
}

export default AddCell
