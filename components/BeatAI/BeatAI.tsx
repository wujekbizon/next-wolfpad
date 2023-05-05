import styles from './BeatAI.module.css'
import { useRef, useState } from 'react'
import BeatAILogo from '../BeatAILogo/BeatAILogo'

const BeatAI = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [playlist, setPlaylist] = useState('')

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!formRef.current) {
      return
    }

    const data = new FormData(formRef.current)

    const response = await fetch('/api/beatai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: data.get('prompt'),
        count: data.get('count')
      })
    })
    if (response.ok) {
      const data = await response.json()
      console.log(data.bot)
      const parsedData = JSON.parse(data.bot.trim())
      console.log(parsedData)
    }
  }

  return (
    <section className={styles.beat}>
      <BeatAILogo />
      <div>
        <form ref={formRef} onSubmit={onHandleSubmit}>
          <input type="text" name="prompt" />
          <select name="count">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="100">100</option>
          </select>
          <button>Generate playlist</button>
        </form>
      </div>
    </section>
  )
}
export default BeatAI
