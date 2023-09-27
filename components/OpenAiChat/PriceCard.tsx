import Link from 'next/link'
import styles from './PriceCard.module.css'

interface TutorPlanPrice {
  plan: string
  price: string
  desc: string
  textBtn: string
  link: string
}

const PriceCard: React.FC<TutorPlanPrice> = ({ price, plan, desc, textBtn, link }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.plan}>{plan}</h3>
      <h2 className={styles.price}>
        {price === 'Free' ? '' : '$'}
        {price}/{price === 'Free' ? 'no monthly fees' : 'month'}
      </h2>
      <div className={styles.desc_container}>
        <p className={styles.desc}>{desc}</p>
      </div>
      <Link href={link} className={styles.price_btn}>
        {textBtn}
      </Link>
    </div>
  )
}
export default PriceCard
