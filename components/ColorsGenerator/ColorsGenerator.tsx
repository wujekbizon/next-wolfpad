import styles from './ColorsGenerator.module.css'

const ColorsGenerator = () => {
  return (
    <section className={styles.colors}>
      <form className={styles.form}>
        <input type="text" />
        <button>Generate Colors</button>
      </form>
    </section>
  )
}
export default ColorsGenerator
