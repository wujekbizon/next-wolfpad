import styles from './ChatNavbar.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import TokensCounter from './TokensCounter'
import { MdMenu, MdClose } from 'react-icons/md'
import { useActions } from '../../hooks/useActions'

const ChatNavbar = () => {
  const { isChatMenuOpen } = useTypedSelector((state) => state.modals)
  const { openChatMenu, closeChatMenu } = useActions()
  return (
    <nav className={styles.chat_navbar}>
      <div>
        {isChatMenuOpen ? (
          <MdClose className={styles.nav_menu} onClick={() => closeChatMenu()} />
        ) : (
          <MdMenu className={styles.nav_menu} onClick={() => openChatMenu()} />
        )}
      </div>
      <TokensCounter />
      <div></div>
    </nav>
  )
}
export default ChatNavbar
