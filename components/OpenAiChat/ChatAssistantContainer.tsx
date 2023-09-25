import styles from './ChatAssistantContainer.module.css'
import Image from 'next/image'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Comment } from 'react-loader-spinner'
import { MdContentCopy } from 'react-icons/md'
import { ChatUserContainerProps } from './ChatUserContainer'

//components
import CodeSyntax from './CodeSyntax'

interface ChatAssistantContainerProps extends ChatUserContainerProps {
  index: number
}

const ChatAssistantContainer: React.FC<ChatAssistantContainerProps> = ({ item, index, onClick }) => {
  const { isLoading, conversations } = useTypedSelector((state) => state.chat)

  const regex = /```(.*?)```/gs
  const [contentPart, ...codeBlocks] = item.content.split(regex)

  return (
    <div className={`${styles.bot_background} ${styles.chat_container} `}>
      <div className={styles.chat_assistant}>
        {isLoading && index >= conversations.length - 1 ? (
          <Comment
            visible={true}
            height={45}
            width={45}
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            color="#fff"
            backgroundColor="#0b0c11"
          />
        ) : (
          <Image src="/images/chatbot.png" alt="chatbot" width={45} height={45} className={styles.image} />
        )}

        <div className={styles.code_container}>
          {codeBlocks &&
            codeBlocks.map((code, index) => {
              console.log(code)
              return (
                <CodeSyntax key={index} language="tsx">
                  {code}
                </CodeSyntax>
              )
            })}
          <CodeSyntax language="jsx">{contentPart}</CodeSyntax>
        </div>
      </div>
      <MdContentCopy className={styles.icon} onClick={() => onClick(item.content)} />
    </div>
  )
}
export default ChatAssistantContainer
