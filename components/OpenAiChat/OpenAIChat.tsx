import styles from './OpeanAIChat.module.css'
import { Fragment, useRef, useEffect, useLayoutEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ChatUserContainer from './ChatUserContainer'
import ChatAssistantContainer from './ChatAssistantContainer'
import UserInput from './UserInput'
import TokensCounter from './TokensCounter'

const OpenAIChat = () => {
  const { conversations } = useTypedSelector((state) => state.chat)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // scroll into view
  useEffect(() => {
    containerRef.current?.lastElementChild?.scrollIntoView()
  }, [conversations])

  const onClickHandler = (content: string): void => {
    navigator.clipboard.writeText(content)
  }

  return (
    <section className={` ${styles.chat}`}>
      <div className={styles.chat_container}>
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
        <UserInput />
      </div>
      <TokensCounter />
    </section>
  )
}
export default OpenAIChat
