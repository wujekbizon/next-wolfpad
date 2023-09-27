import styles from './About.module.css'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../utils/motion'
import Title from '../components/Animation/Title'

const About = () => {
  return (
    <section className={styles.about}>
      <div className="gradient-02" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={styles.about_container}
      >
        <div className="animated_title">
          <Title title="about wolfpad" />
        </div>

        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)} className={`${styles.about_content} glassmorphism`}>
          Welcome to <span>Wolfpad</span>! The ultimate code playground and learning platform designed for beginners and
          students. With Wolfpad, you can unleash your coding potential and start your programming journey with ease.
          Whether you're new to coding or an experienced developer, Wolfpad provides an intuitive and user-friendly
          interface for writing JavaScript code, especially React Components. Our interactive coding environment allows
          you to write, edit, and debug your code effortlessly. Get immediate feedback, test your code in real-time, and
          watch your skills grow with Wolfpad.
        </motion.p>
        <br />

        <motion.p variants={fadeIn('up', 'tween', 0.4, 1)} className={`${styles.about_content} glassmorphism`}>
          <span>Wolfpad AI</span> is a cutting-edge addition to the Wolfpad, incorporating the latest advancements in
          artificial intelligence chatbot technology. It enhances the coding experience by offering a robust set of
          features, including syntax highlighting, auto-completion, and debugging tools. These powerful functionalities
          ensure that students can concentrate on the fundamental logic of their code, without getting bogged down by
          syntax or other intricate technicalities. With Wolfpad AI, coding becomes even more efficient and hassle-free.
        </motion.p>
      </motion.div>
    </section>
  )
}
export default About
