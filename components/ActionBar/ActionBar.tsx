import styles from './ActionBar.module.css'
import { useState, useEffect } from 'react'
import { FiArrowUp, FiArrowDown, FiSave } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import ActionButton from '../ActionButton/ActionButton'
import { useActions } from '../../hooks/useActions'
import { Cell } from '../../state/cell'
import FilesReader from '../FileReader/FilesReader'

interface ActionBarProps {
  cell: Cell
}

const ActionBar: React.FC<ActionBarProps> = ({ cell }) => {
  const [fileContent, setFileContent] = useState('')
  const { moveCell, deleteCell, saveCells } = useActions()

  const onClickHandler = () => {
    console.log(fileContent)
  }

  useEffect(() => {
    console.log(fileContent)
  }, [fileContent])

  return (
    <div className={styles.action_bar}>
      {cell.type === 'code' && <ActionButton icon={<FiSave />} onClick={() => saveCells()} />}
      {cell.type === 'chatbot' && (
        <>
          <ActionButton icon={<FilesReader setFileContent={setFileContent} />} onClick={onClickHandler} />
        </>
      )}
      <ActionButton
        icon={<FiArrowUp />}
        onClick={() =>
          moveCell({
            id: cell.id,
            direction: 'up'
          })
        }
      />
      <ActionButton
        icon={<FiArrowDown />}
        onClick={() =>
          moveCell({
            id: cell.id,
            direction: 'down'
          })
        }
      />
      <ActionButton icon={<MdClose />} onClick={() => deleteCell(cell.id)} />
    </div>
  )
}
export default ActionBar
