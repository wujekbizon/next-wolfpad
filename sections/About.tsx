import styles from './About.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import Title from '../components/Animation/Title';

const About = () => {
  return (
    <section className={styles.about}>
      <div className="gradient-02" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.about_content}
      >
        <div className="animated_title">
          <Title title="about wolfpad" />
        </div>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={styles.about_content}
        >
          Wolfpad, an interactive coding environment is a powerful tool for
          developers of all levels. It provides an intuitive and user-friendly
          interface that allows users to quickly create, edit, and debug code.
          With an interactive coding environment, users can easily test their
          code in real-time and get immediate feedback on their progress. This
          makes it easier to identify errors and make changes quickly.
        </motion.p>
        <br />

        <motion.p variants={fadeIn('up', 'tween', 0.4, 1)}>
          Additionally, Wolfpad comes with helpful features such as syntax
          highlighting, auto-completion, and debugging tools that make coding
          more efficient. With these features, developers can focus on the logic
          of their code rather than worrying about syntax or other technical
          details. An interactive coding environment is a great way to learn
          programming quickly and efficiently.
        </motion.p>
      </motion.div>
    </section>
  );
};
export default About;
