import styles from './ChatNavbar.module.css'
import Image from 'next/image'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import TokensCounter from './TokensCounter'
import { MdMenu, MdClose } from 'react-icons/md'
import { useActions } from '../../hooks/useActions'
import { Blocks } from 'react-loader-spinner'

const ChatNavbar = () => {
  const { isChatMenuOpen } = useTypedSelector((state) => state.modals)
  const { usage, isLoading } = useTypedSelector((state) => state.chat)
  const { openChatMenu, closeChatMenu } = useActions()

  const totalAmountToPay = (usage.totalTokens / 1000) * 0.002

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
        <div className={styles.total_amount}>
          <p>Amount to pay</p>
          {isLoading ? (
            <Blocks
              visible={true}
              height={18}
              width={18}
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          ) : (
            <span>${totalAmountToPay.toFixed(6)}</span>
          )}
        </div>
        <Image src="/images/wolfpadai.png" alt="logo" width={70} height={70} className={styles.logo} />
      </div>
    </nav>
  )
}
export default ChatNavbar
