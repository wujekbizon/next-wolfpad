import styles from './ChatContainer.module.css'
import { Fragment, useEffect, useRef } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ChatAssistantContainer from './ChatAssistantContainer'
import ChatUserContainer from './ChatUserContainer'
import UserInput from './UserInput'
import ChatHero from './ChatHero'

const ChatContainer = () => {
  const { conversations, isLoading, isInitialized } = useTypedSelector((state) => state.chat)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // scroll into view
  useEffect(() => {
    containerRef.current?.lastElementChild?.scrollIntoView()
  }, [conversations])

  const onClickHandler = (content: string): void => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className={styles.chat_container}>
      {isInitialized && !isLoading && <ChatHero />}
      {!isInitialized && (
        <div className={styles.chat_conversation} ref={containerRef}>
          {conversations.map((item, index) => (
            <Fragment key={index}>
              {item.role === 'assistant' && (
                <ChatAssistantContainer item={item} index={index} onClick={onClickHandler} />
              )}
              {item.role === 'user' && <ChatUserContainer item={item} onClick={onClickHandler} />}
            </Fragment>
          ))}
        </div>
      )}

      <UserInput />
    </div>
  )
}
export default ChatContainer
