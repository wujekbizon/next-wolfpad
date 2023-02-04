import styles from './CustomText.module.css';

import { motion } from 'framer-motion';
import { textContainer, textVariant } from '../../utils/motion';

type TypingTextProps = {
  title: string;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    className={`${textStyles} ${styles.text_typed}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);
