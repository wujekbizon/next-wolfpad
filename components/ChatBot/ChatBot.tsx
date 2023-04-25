import styles from './ChatBot.module.css'
import InputForm from '../Chat/InputForm'
import { useRef, useCallback, useState } from 'react'
import fetchOpenAiApi from '../../helpers/chatApiCalls'
import { generateUniqueId, chatStripe, loader } from '../../helpers/helpers'
import Resizable from '../Resizable/Resizable'
import Image from 'next/image'

let loadInterval: NodeJS.Timer

const ChatBot = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const chatContainerRef = useRef<HTMLElement | null>(null)
  const [isInitializing, setIsInitializing] = useState(false)

  const handleSubmitCallback: React.FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
    e.preventDefault()

    if (!formRef.current || !chatContainerRef.current) {
      return
    }

    const data = new FormData(formRef.current)

    // user's chatstripe
    chatContainerRef.current.innerHTML += chatStripe(false, data.get('prompt'), '')

    // to clear the textarea input
    formRef.current.reset()

    // bot's chatstripe
    const uniqueId = generateUniqueId()
    chatContainerRef.current.innerHTML += chatStripe(true, '', uniqueId)

    // to focus scroll to the bottom
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight

    // specific message div
    const messageDiv = document.getElementById(uniqueId)

    if (!messageDiv) {
      return <p>Loading...</p>
    }

    const interval = loader(messageDiv, loadInterval)
    //  fetch api
    const response = await fetchOpenAiApi(data, interval, messageDiv)

    if (response.ok) {
      setIsInitializing(true)
    }
  }, [])

  return (
    <>
      <Resizable direction="vertical" constraint={300}>
        <div className={`${styles.chat_container}`}>
          <header className={styles.header}>
            <div className={!isInitializing ? `${styles.line}` : `${styles.online}`} />
            {!isInitializing ? <h4>Chat Bot Initializing ...</h4> : <h4>Chat Bot Online</h4>}
          </header>
          <section className={`${styles.chat_inner}`} ref={chatContainerRef}></section>
          <div className={styles.form_container}>
            <InputForm formRef={formRef} onHandleSubmit={handleSubmitCallback} />
            <Image src="/images/bot.svg" alt="bot" width={100} height={70} className={styles.form_image} />
          </div>
        </div>
      </Resizable>
    </>
  )
}
export default ChatBot
