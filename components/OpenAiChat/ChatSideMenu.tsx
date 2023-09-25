import styles from './ChatSideMenu.module.css'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Geolocation from './Geolocation'

const ChatSideMenu = () => {
  const { isChatMenuOpen } = useTypedSelector((state) => state.modals)
  const { closeChatMenu } = useActions()

  return (
    <aside className={`${isChatMenuOpen ? styles.chat_side_open : styles.chat_side_close}  ${styles.chat_side} `}>
      <div className={styles.menu_items}>
        <h2>More Content</h2>
        <Geolocation />
      </div>
    </aside>
  )
}
export default ChatSideMenu
