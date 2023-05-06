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
      setPlaylist(parsedData)
    }
  }

  return (
    <section className={styles.beat}>
      <BeatAILogo />
      <div>
        <form ref={formRef} onSubmit={onHandleSubmit}>
          <input type="text" name="prompt" />
          <input type="number" name="count" min={3} max={25} defaultValue={3} />
          <button>Generate playlist</button>
        </form>
      </div>
      <div>{playlist}</div>
    </section>
  )
}
export default BeatAI
