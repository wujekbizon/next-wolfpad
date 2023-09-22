import styles from './OpeanAIChat.module.css'
import { Fragment } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ChatUserContainer from './ChatUserContainer'
import ChatAssistantContainer from './ChatAssistantContainer'
import UserInput from './UserInput'

const OpenAIChat = () => {
  const { conversations } = useTypedSelector((state) => state.chat)

  const onClickHandler = (content: string): void => {
    navigator.clipboard.writeText(content)
  }

  return (
    <section className={` ${styles.chat}`}>
      <div className={styles.chat_container}>
        <div className={styles.textarea}>
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
    </section>
  )
}
export default OpenAIChat
