import styles from './OpeanAIChat.module.css'
import ChatContainer from './ChatContainer'
import ChatSideMenu from './ChatSideMenu'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ChatModal from '../ChatModal/ChatModal'

const OpenAIChat = () => {
  const { isChatMenuOpen, isChatModalOpen } = useTypedSelector((state) => state.modals)
  return (
    <section className={styles.chat}>
      {isChatMenuOpen && <ChatSideMenu />}
      <ChatContainer />
      {isChatModalOpen && <ChatModal />}
    </section>
  )
}
export default OpenAIChat
