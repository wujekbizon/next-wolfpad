import styles from './ChatNavbar.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import TokensCounter from './TokensCounter'
import { MdMenu, MdClose } from 'react-icons/md'
import { useActions } from '../../hooks/useActions'
import Image from 'next/image'

const ChatNavbar = () => {
  const { isChatMenuOpen } = useTypedSelector((state) => state.modals)
  const { openChatMenu, closeChatMenu } = useActions()
  return (
    <nav className={styles.chat_navbar}>
      <div>
        {isChatMenuOpen ? (
          <MdClose className={styles.nav_icon} onClick={() => closeChatMenu()} />
        ) : (
          <MdMenu className={styles.nav_icon} onClick={() => openChatMenu()} />
        )}
      </div>
      <TokensCounter />

      <div className={styles.logo_container}>
        <Image src="/images/wolfpadai.png" alt="logo" width={70} height={70} className={styles.logo} />
      </div>
    </nav>
  )
}
export default ChatNavbar
