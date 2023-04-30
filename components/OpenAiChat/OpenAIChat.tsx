import styles from './OpeanAIChat.module.css'
import { Fragment, useState, useCallback, useRef, useEffect } from 'react'
import Image from 'next/image'
import { personalities } from '../../data/features'

interface Conversation {
  role: string
  content: string
}

const OpenAIChat = () => {
  const [value, setValue] = useState('')
  const [chatPersonality, setChatPersonality] = useState('funny and helpful')
  const initialPrompt = `You are a conversational chatbot. Your personality is: ${chatPersonality}`

  const [conversation, setConversation] = useState<Conversation[]>([{ role: 'system', content: initialPrompt }])
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const onKeyDownHandler = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const chatHistory = [...conversation, { role: 'user', content: value }]
      const response = await fetch('/api/openAIChat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: chatHistory })
      })

      const data = await response.json()
      setValue('')
      setConversation([...chatHistory, { role: 'assistant', content: data.result.choices[0].message.content }])
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
  }, [chatPersonality])

  return (
    <section className={`glassmorphism ${styles.chat}`}>
      <div className={styles.left}>
        <div className={styles.textarea}>
          {conversation.map((item, index) => (
            <Fragment key={index}>
              {item.role === 'assistant' && (
                <div className={`${styles.bot_background} ${styles.chat_container}`}>
                  <div className={styles.chat_assistant}>
                    <Image src="/images/chatbot.png" alt="chatbot" width={35} height={35} className={styles.image} />
                    {item.content}
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
          ))}
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
      <div className={styles.right}>
        <div className={styles.settings}>
          <button className="glassmorphism" onClick={onClickRefreshHandler}>
            Start New Conversation
          </button>
          <div className={styles.personalities}>
            <label htmlFor="select">Change AI Personality</label>
            <select id="select" className="glassmorphism" onChange={onPersonalityChange}>
              {personalities.map((personality) => (
                <option key={personality} value={personality}>
                  {personality}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}
export default OpenAIChat
