import styles from './ChatModal.module.css'
import { motion } from 'framer-motion'
import { useActions } from '../../hooks/useActions'
import TokensCounter from '../OpenAiChat/TokensCounter'
import { CgCloseR } from 'react-icons/cg'
import { staggerContainer, zoomIn } from '../../utils/motion'

const ChatModal = () => {
  const { closeChatModal } = useActions()
  const handleModal = () => {
    closeChatModal()
  }

  return (
    <aside className={styles.chat_modal}>
      <CgCloseR className={styles.icon} onClick={handleModal} />
      <div className={styles.modal_container}>
        <TokensCounter />
      </div>
    </aside>
  )
}
export default ChatModal
