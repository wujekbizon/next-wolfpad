import styles from './ColorsGenerator.module.css'
import ColorBox from '../ColorBox/ColorBox'
import { useRef, useState } from 'react'
import { fetchColorsPalette } from '../../helpers/chatApiCalls'

const ColorsGenerator = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [colors, setColors] = useState([])

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!formRef.current) {
      return
    }

    const data = new FormData(formRef.current)

    const response = await fetchColorsPalette(data, setColors)
  }

  return (
    <section className={styles.colors}>
      {colors.map((color) => (
        <ColorBox key={color} color={color} />
      ))}
      <form className={styles.form} onSubmit={onHandleSubmit} ref={formRef}>
        <input name="prompt" type="text" placeholder="sunset beach" />
        <button>Generate</button>
      </form>
    </section>
  )
}
export default ColorsGenerator
