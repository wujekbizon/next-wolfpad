import styles from './TutorPlans.module.css'
import PriceCard from '../components/OpenAiChat/PriceCard'
import { prices } from '../data/prices'

const TutorPlans = () => {
  return (
    <section className={styles.tutor_plans}>
      <div className={styles.price_title}>
        <h1>Pricing</h1>
        <p>One flat monthly fee. No contracts, no hidden fees, no stress of finding a great tutor for your kids.</p>
      </div>
      <div className={styles.prices}>
        {prices.map((item) => (
          <PriceCard {...item} key={item.plan} />
        ))}
      </div>
    </section>
  )
}
export default TutorPlans
