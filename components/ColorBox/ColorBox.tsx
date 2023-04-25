import styles from './ColorBox.module.css'

const ColorBox = ({ color }: { color: string }) => {
  return (
    <div className={styles.box} style={{ background: color }}>
      <h4>{color}</h4>
    </div>
  )
}
export default ColorBox
