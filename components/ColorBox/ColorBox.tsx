import styles from './ColorBox.module.css'

const ColorBox = ({ color }: { color: string }) => {
  const onClickHandler = () => {
    navigator.clipboard.writeText(color)
  }

  return (
    <div className={styles.box} style={{ background: color }} onClick={onClickHandler}>
      <h4>{color}</h4>
    </div>
  )
}
export default ColorBox
