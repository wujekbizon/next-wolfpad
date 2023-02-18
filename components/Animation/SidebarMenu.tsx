import styles from './SidebarMenu.module.css';
import Link from 'next/link';
import { navLinks } from '../../data/links';
import { motion } from 'framer-motion';
import { staggerContainer, slideIn, fadeIn } from '../../utils/motion';
import { useActions } from '../../hooks/useActions';

export const SidebarMenu = () => {
  const { closeSideMenu } = useActions();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.side_menu}
    >
      <motion.ul
        variants={slideIn('up', 'tween', 0.2, 0.5)}
        className={` ${styles.menu_list}`}
      >
        {navLinks.map((link, index) => (
          <motion.li
            variants={fadeIn(
              index % 2 ? 'left' : 'right',
              'tween',
              0.8 + index / 2,
              0.6
            )}
            key={link.id}
            className={`${styles.shadow} ${styles.link}`}
            onClick={() => closeSideMenu()}
          >
            <Link href={link.url} className={styles.label}>
              <h2 className={`label_${index + 1}`}>{link.label}</h2>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};
