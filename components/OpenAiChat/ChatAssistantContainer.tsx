import styles from './ChatAssistantContainer.module.css'
import { Comment } from 'react-loader-spinner'
import Image from 'next/image'
import { MdContentCopy } from 'react-icons/md'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ChatUserContainerProps } from './ChatUserContainer'

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('ts', ts)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('jsx', jsx)

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
            height={35}
            width={35}
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass={styles.comment}
            color="#fff"
            backgroundColor="#0b0c11"
          />
        ) : (
          <Image src="/images/chatbot.png" alt="chatbot" width={45} height={45} className={styles.image} />
        )}

        <div className={styles.code_container}>
          {codeBlocks &&
            codeBlocks.map((code, index) => (
              <SyntaxHighlighter
                wrapLongLines={true}
                style={coldarkDark}
                language={'tsx'}
                key={index}
                customStyle={{ minHeight: '65px' }}
              >
                {code}
              </SyntaxHighlighter>
            ))}

          <SyntaxHighlighter wrapLongLines={true} style={coldarkDark} customStyle={{ minHeight: '65px' }}>
            {contentPart}
          </SyntaxHighlighter>
          {/* {item.content} */}
        </div>
      </div>
      <MdContentCopy className={styles.icon} onClick={() => onClick(item.content)} />
    </div>
  )
}
export default ChatAssistantContainer
