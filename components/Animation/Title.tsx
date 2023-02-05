import styles from './Title.module.css';
import { TypingText } from './CustomText';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const Title = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles?: string;
}) => {
  return (
    <div className="title-wrapper">
      <motion.div
        variants={fadeIn('left', 'tween', 1.1, 1.5)}
        className={styles.divider}
      />
      <TypingText title={title} textStyles={textStyles} />
    </div>
  );
};
export default Title;
