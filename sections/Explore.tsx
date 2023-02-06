import styles from './Explore.module.css';
import { useState } from 'react';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { exploreFeatures } from '../data/features';
import Title from '../components/Animation/Title';
import { TitleText } from '../components/Animation/CustomText';

const Explore = () => {
  const [active, setActive] = useState('feature-2');

  return (
    <section className={styles.explore}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.content}
      >
        <div className="animated_title">
          <Title title="Explore Endless Possibilities" />
        </div>
        <TitleText
          title={
            <>
              Let's explore main features of <br /> Wolfpad
            </>
          }
        />
        <div className={styles.cards_container}>
          {exploreFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Explore;
