import styles from './Placeholder.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../utils/motion';
import { TypingText } from '../Animation/CustomText';

const Placeholder = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.editor_placeholder}
      >
        <br />
        <h1 className={styles.placeholder_title}>
          <TypingText title="Welcome to Wolfpad - an interactive coding environment." />
        </h1>
        <br />
        <motion.h3
          variants={fadeIn('down', 'tween', 0.4, 1)}
          className={styles.placeholder_info}
        >
          You can write Javascript, see it executed, and write comprehensive
          documentation using built in markdown editor.
        </motion.h3>

        <br />
        <ul className={styles.placeholder_list}>
          <motion.li variants={fadeIn('up', 'tween', 0.4, 1)}>
            The code in each code editor is all joined together into one file.
            If you define a variable in cell #1, you can refer to it in any
            following cell!
          </motion.li>
          <motion.li variants={fadeIn('up', 'tween', 0.6, 1)}>
            You can show any React component, string, number, or anything else
            by calling the <i className="gradient_text">&lt; show &gt;</i>{' '}
            function. This is a function built into this environment. Call{' '}
            <i className="gradient_text">&lt; show &gt;</i> multiple times to
            show multiple values
          </motion.li>
          <motion.li variants={fadeIn('up', 'tween', 0.8, 1)}>
            Re-order or delete cells using the buttons on the top right
          </motion.li>
          <motion.li variants={fadeIn('up', 'tween', 1, 1)}>
            Add new cells by hovering on the divider between each cell
          </motion.li>
        </ul>
        <p className={styles.placeholder_note}>
          | Click anywhere inside editor to write |
        </p>
      </motion.div>
    </>
  );
};

export default Placeholder;
