import styles from './OpeanAIChat.module.css'
import { Fragment, useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import ChatSideMenu from './ChatSideMenu'
import TypedAssistantResponse from '../Animation/TypedAssistantResponse'

interface Conversation {
  role: string
  content: string
}

const OpenAIChat = () => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [chatPersonality, setChatPersonality] = useState('funny and helpful')
  const initialPrompt = `You are a conversational chatbot. Your personality is: ${chatPersonality}`
  const [conversation, setConversation] = useState<Conversation[]>([{ role: 'system', content: initialPrompt }])
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const onKeyDownHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsLoading(true)
      const chatHistory = [
        ...conversation,
        { role: 'system', content: initialPrompt },
        { role: 'user', content: value }
      ]
      try {
        const response = await fetch('/api/openAIChat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ messages: chatHistory })
        })

        if (response.ok) {
          const data = await response.json()

          setValue('')
          setConversation([...chatHistory, { role: 'assistant', content: data.result.choices[0].message.content }])
          setIsLoading(false)
        }
      } catch (err) {
        if (err instanceof Error) {
          setConversation([...conversation, { role: 'assistant', content: `Something went wrong - ${err.message}` }])
        }
      }
    }
  }

  const onClickRefreshHandler = () => {
    inputRef.current?.focus()
    setValue('')
    setConversation([])
  }

  const onPersonalityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChatPersonality(e.target.value)
  }

  useEffect(() => {
    const newConversation = conversation.find((item) => {
      if (item.role === 'system') {
        item.content = `You are a conversational chatbot. Your personality is ${chatPersonality}`
      }
      return item
    })
    if (newConversation) {
      setConversation([newConversation])
    }
  }, [chatPersonality, conversation])

  return (
    <section className={` ${styles.chat}`}>
      <div className={styles.left}>
        <div className={styles.textarea}>
          {conversation.map((item, index) => {
            return (
              <Fragment key={index}>
                {item.role === 'assistant' && (
                  <div className={`${styles.bot_background} ${styles.chat_container}`}>
                    <div className={styles.chat_assistant}>
                      <Image src="/images/chatbot.png" alt="chatbot" width={35} height={35} className={styles.image} />
                      {/* <TypedAssistantResponse text={item.content} /> */}
                      {isLoading && index >= conversation.length - 1 ? <p>Loading...</p> : item.content}
                    </div>
                  </div>
                )}
                {item.role === 'user' && (
                  <div className={styles.chat_container}>
                    <div className={styles.chat_user}>
                      <Image src="/images/user.svg" alt="chatbot" width={35} height={35} className={styles.image} />
                      {item.content}
                    </div>
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
        <div className={styles.input_container}>
          <input
            placeholder="Send a message"
            value={value}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            ref={inputRef}
            className={styles.user_input}
          />
        </div>
      </div>
      <ChatSideMenu onClickRefreshHandler={onClickRefreshHandler} onPersonalityChange={onPersonalityChange} />
    </section>
  )
}
export default OpenAIChat
