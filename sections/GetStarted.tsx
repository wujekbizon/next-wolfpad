import styles from './GetStarted.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, titleVariants } from '../utils/motion';
import { startingFeatures } from '../data/features';
import StartSteps from '../components/StartSteps/StartSteps';
import { TitleText } from '../components/Animation/CustomText';
import Title from '../components/Animation/Title';

const GetStarted = () => {
  return (
    <section className={styles.get_started}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.content}
      >
        <motion.div
          variants={titleVariants('left')}
          className={styles.image_container}
        >
          <img
            src="/images/code.jpg"
            alt="get-started"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className={styles.content_features}
        >
          <div className="animated_title">
            <Title title="Wolfpad 2.0" />
          </div>
          <TitleText title={<>Get started with just a few clicks</>} />
          <div className={styles.get_started_wrapper}>
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default GetStarted;
