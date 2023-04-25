import styles from './ColorsGenerator.module.css'
import ColorBox from '../ColorBox/ColorBox'

type ColorsGeneratorProps = {
  onHandleSubmit: React.FormEventHandler<HTMLFormElement>
  formRef: React.MutableRefObject<HTMLFormElement | null>
  colors: string[]
}

const ColorsGenerator = ({ onHandleSubmit, formRef, colors }: ColorsGeneratorProps) => {
  return (
    <section className={styles.colors}>
      {colors.map((color) => (
        <ColorBox key={color} color={color} />
      ))}
      <form className={styles.form} onSubmit={onHandleSubmit} ref={formRef}>
        <input name="prompt" type="text" placeholder="sunset beach" />
        <button>Generate Colors</button>
      </form>
    </section>
  )
}
export default ColorsGenerator
