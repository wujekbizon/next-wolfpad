import styles from './ChatSideMenu.module.css'
import { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { chatSideMenuIcons } from '../../data/chatSideMenuIcons'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'

const ChatSideMenu = () => {
  const [active, setActive] = useState<number | null>(null)
  const { openChatModal, closeChatMenu } = useActions()

  const handleClick = (text: string, id: number) => {
    switch (text) {
      case 'Usage':
        setActive(id)
        closeChatMenu()
        openChatModal()
        break
      case 'Edit':
      case 'New':
      case 'Move':
      case 'Delete':
      case 'Empty':
      case 'Pack Files':
      case 'Settings':
      case 'Reread Source':
      case 'File Names':
      case 'All Files':
      case 'Thumbnail':
      case 'Go Back':
      case 'Go Forward':
      case 'Invert':
      case 'Search':
      case 'Rename Files':
      case 'Notepad':
      case 'Sync Dir':
      case 'Copy Names':
        console.log(text)
        setActive(id)
        break
      default:
        console.log('Invalid option')
        break
    }
  }

  return (
    <motion.aside
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div variants={fadeIn('right', 'tween', 0.3, 0.3)} className={styles.chat_side}>
        <motion.div className={styles.menu_items}>
          {chatSideMenuIcons.map(({ icon, text, id, isSupport }, index) => (
            <div
              key={id}
              className={`${!isSupport && styles.disable} ${active === index + 1 && styles.active}   ${
                styles.icon_container
              }`}
            >
              <div className={styles.icon} onClick={() => handleClick(text, id)}>
                {icon}
              </div>
              <span className={styles.icon_text}>{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.aside>
  )
}
export default ChatSideMenu
