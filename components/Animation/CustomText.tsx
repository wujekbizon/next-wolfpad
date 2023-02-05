import styles from './CustomText.module.css';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant } from '../../utils/motion';

type TypingTextProps = {
  title: string;
  textStyles?: string;
};

type TextProps = {
  title: ReactNode;
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

export const TitleText = ({ title, textStyles }: TextProps) => (
  <motion.h2
    variants={textVariant}
    initial="hidden"
    whileInView="show"
    className={`text-title ${textStyles}`}
  >
    {title}
  </motion.h2>
);
