import styles from './ChatHero.module.css'
import { chatFeatures } from '../../data/chatFeatures'
import ChatFeatureCard from './ChatFeatureCard'

const ChatHero = () => {
  return (
    <section className={styles.chat_hero}>
      <div className={styles.chat_grid}>
        {chatFeatures.map((item) => (
          <ChatFeatureCard {...item} key={item.title} />
        ))}
      </div>
    </section>
  )
}
export default ChatHero
