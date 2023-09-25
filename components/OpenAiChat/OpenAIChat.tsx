import styles from './OpeanAIChat.module.css'
import { motion } from 'framer-motion'
import ChatNavbar from './ChatNavbar'
import ChatContainer from './ChatContainer'
import ChatSideMenu from './ChatSideMenu'

const OpenAIChat = () => {
  return (
    <>
      <ChatNavbar />
      <section className={styles.chat}>
        <ChatSideMenu />
        <ChatContainer />
      </section>
    </>
  )
}
export default OpenAIChat
