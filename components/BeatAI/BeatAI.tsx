import styles from './BeatAI.module.css'
import Image from 'next/image'

const BeatAI = () => {
  return (
    <section className={styles.beat}>
      <div className={styles.beat_logo}>
        <Image
          src="/images/marble.png"
          alt="logo"
          width={350}
          height={350}
          className={`glassmorphism ${styles.image}`}
        />
        <Image
          src="/images/marble2.png"
          alt="logo"
          width={350}
          height={350}
          className={`glassmorphism ${styles.image}`}
        />
        <Image
          src="/images/marble3.png"
          alt="logo"
          width={350}
          height={350}
          className={`glassmorphism ${styles.image}`}
        />
        <Image
          src="/images/marble4.png"
          alt="logo"
          width={350}
          height={350}
          className={`glassmorphism ${styles.image}`}
        />
        <h1 className="glassmorphism gradient_text">BeatAI</h1>
      </div>
      <div></div>
    </section>
  )
}
export default BeatAI
