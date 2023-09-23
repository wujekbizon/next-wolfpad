import styles from './ChatUserContainer.module.css'
import Image from 'next/image'
import { MdContentCopy } from 'react-icons/md'
import { Conversation } from '../../state/slices/chatSlice'

//components
import CodeSyntax from './CodeSyntax'

export interface ChatUserContainerProps {
  item: Conversation
  onClick: (e: string) => void
}

const ChatUserContainer: React.FC<ChatUserContainerProps> = ({ item, onClick }) => {
  const regex = /\/```(.*?)```\/gs/
  const [contentPart, ...codeBlocks] = item.content.split(regex)

  return (
    <div className={styles.chat_container}>
      <div className={styles.chat_user}>
        <Image src="/images/user.svg" alt="chatbot" width={45} height={45} className={styles.image} />
        <div className={styles.code_container}>
          <CodeSyntax language="md">{contentPart}</CodeSyntax>
          {codeBlocks &&
            codeBlocks.map((code, index) => (
              <CodeSyntax key={index} language="tsx">
                {code}
              </CodeSyntax>
            ))}
        </div>
      </div>
      <MdContentCopy className={styles.icon} onClick={() => onClick(item.content)} />
    </div>
  )
}
export default ChatUserContainer
