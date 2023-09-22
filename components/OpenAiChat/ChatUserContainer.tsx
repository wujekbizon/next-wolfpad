import styles from './ChatUserContainer.module.css'
import Image from 'next/image'
import { MdContentCopy } from 'react-icons/md'
import { Conversation } from '../../state/slices/chatSlice'

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

export interface ChatUserContainerProps {
  item: Conversation
  onClick: (e: string) => void
}

const ChatUserContainer: React.FC<ChatUserContainerProps> = ({ item, onClick }) => {
  const regex = /```(.*?)```/gs
  const [contentPart, ...codeBlocks] = item.content.split(regex)

  return (
    <div className={styles.chat_container}>
      <div className={styles.chat_user}>
        <Image src="/images/user.svg" alt="chatbot" width={45} height={45} className={styles.image} />

        <div className={styles.code_container}>
          {codeBlocks &&
            codeBlocks.map((code, index) => (
              <SyntaxHighlighter
                style={coldarkDark}
                wrapLongLines={true}
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
        </div>
      </div>
      <MdContentCopy className={styles.icon} onClick={() => onClick(item.content)} />
    </div>
  )
}
export default ChatUserContainer
