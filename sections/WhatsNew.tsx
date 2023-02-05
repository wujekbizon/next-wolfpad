import styles from './WhatsNew.module.css';
import { newFeatures } from '../data/features';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, titleVariants } from '../utils/motion';
import Title from '../components/Animation/Title';
import { TitleText } from '../components/Animation/CustomText';
import NewFeature from '../components/NewFeature/NewFeature';

const WhatsNew = () => {
  return (
    <section className={styles.whats_new}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.container}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={styles.title}
        >
          <div className="animated_title">
            <Title title="Whats New ?" />
          </div>
          <TitleText title={<>What's new about Wolfpad ?</>} />
          <div className={styles.wrapper}>
            {newFeatures.map((feature) => (
              <NewFeature key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={titleVariants('right')}
          className={styles.image_container}
        >
          <img
            src="/images/vr.avif"
            alt="get-started"
            className={styles.image}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default WhatsNew;
