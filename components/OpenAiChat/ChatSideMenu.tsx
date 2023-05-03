import styles from './ChatSideMenu.module.css'
import { MdMenu, MdClose } from 'react-icons/md'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { personalities } from '../../data/features'
import { IoMdChatboxes } from 'react-icons/io'

type ChatSideMenuProps = {
  onClickRefreshHandler: () => void
  onPersonalityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const ChatSideMenu = ({ onClickRefreshHandler, onPersonalityChange }: ChatSideMenuProps) => {
  const { openChatMenu, closeChatMenu } = useActions()
  const isChatMenuOpen = useTypedSelector((state) => state.chat.isChatMenuOpen)

  return (
    <>
      {isChatMenuOpen ? (
        <MdClose className={styles.icon} onClick={() => closeChatMenu()} />
      ) : (
        <MdMenu className={styles.icon} onClick={() => openChatMenu()} />
      )}
      <div className={`glassmorphism ${isChatMenuOpen ? `${styles.open} ${styles.side_menu}` : styles.side_menu}`}>
        <div className={styles.settings}>
          <button className={styles.btn} onClick={onClickRefreshHandler}>
            <IoMdChatboxes /> Start New Conversation
          </button>
          <div className={styles.personalities}>
            <label htmlFor="select">Change AI Personality:</label>
            <select id="select" onChange={onPersonalityChange}>
              {personalities.map((personality) => (
                <option key={personality} value={personality}>
                  {personality}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  )
}
export default ChatSideMenu
