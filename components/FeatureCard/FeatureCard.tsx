import styles from './FeatureCard.module.css';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

type FeatureCardProps = {
  id: string;
  url: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
};

const FeatureCard = ({
  id,
  url,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={
        active === id
          ? `${styles.feature_active} ${styles.feature_card_container}`
          : `${styles.feature_card_container}`
      }
      onClick={() => handleClick(id)}
    >
      <img src={imgUrl} alt={title} className={styles.feature_card_image} />
      {active !== id ? (
        <h3 className={`gradient_preview ${styles.feature_card_title}`}>
          {title}
        </h3>
      ) : (
        <div className={styles.active_title_container}>
          <div className={`${styles.active_image_container} glassmorphism`}>
            <img
              src="/images/vrpano.svg"
              alt="headset"
              className={styles.explore_image}
            />
          </div>
          <Link href={url}>
            <p className={styles.active_content}>Explore Feature</p>
          </Link>
          <h2 className={`gradient_text ${styles.active_title}`}>{title}</h2>
        </div>
      )}
    </motion.div>
  );
};
export default FeatureCard;
