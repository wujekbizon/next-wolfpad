import styles from './OpeanAIChat.module.css'
import { Fragment, useState, useCallback, useRef } from 'react'

interface Conversation {
  role: string
  content: string
}

const OpenAIChat = () => {
  const [value, setValue] = useState('')
  const [conversation, setConversation] = useState<Conversation[]>([])
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
  return (
    <section className={styles.chat}>
      <div>
        <input
          placeholder="Send a message"
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          ref={inputRef}
        />
        <button onClick={onClickRefreshHandler}>Start New Conversation</button>
        <div className="textarea">
          {conversation.map((item, index) => (
            <Fragment key={index}>
              <br />
              {item.role === 'assistant' ? (
                <div className="chat chat-end">
                  <div className="chat-bubble chat-bubble-secondary">
                    <strong className="badge badge-primary">Bot</strong>
                    <br />
                    {item.content}
                  </div>
                </div>
              ) : (
                <div className="chat chat-start">
                  <div className="chat-bubble chat-bubble-primary">
                    <strong className="badge badge-secondary">User</strong>
                    <br />
                    {item.content}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
export default OpenAIChat
