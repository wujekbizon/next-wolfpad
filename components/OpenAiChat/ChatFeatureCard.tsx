import styles from './ChatFeatureCard.module.css'
import { ChatFeatureCardInterface } from '../../types/chatTypes'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { updateChatHistory } from '../../state/thunks/updateChatHistory'
import CodeSyntax from './CodeSyntax'

const ChatFeatureCard: React.FC<ChatFeatureCardInterface> = ({ title, content, icon, prompt, language }) => {
  const { promptTitle, promptValue, btnText, examplePrompt } = prompt
  const dispatch = useAppDispatch()
  const { conversations } = useTypedSelector((state) => state.chat)

  const onHandleClick = () => {
    const newPrompt = [
      ...conversations,
      { role: 'system', content: promptValue },
      { role: 'user', content: examplePrompt },
    ]

    dispatch(updateChatHistory(newPrompt))
  }

  return (
    <div className={styles.chat_card}>
      {icon}
      <div className={styles.chat_feature}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className={styles.chat_prompt}>
        <h5>{promptTitle}</h5>
        {/* <span>&ldquo;{examplePrompt}&rdquo;</span> */}
        <CodeSyntax
          style={{
            overflowX: 'auto',
            overflowY: 'auto',
            maxHeight: '170px',
            margin: '0',
            paddingLeft: '5px',
          }}
          language={language}
        >
          {examplePrompt}
        </CodeSyntax>
        <button onClick={onHandleClick}>{btnText}</button>
      </div>
    </div>
  )
}
export default ChatFeatureCard
