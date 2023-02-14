import styles from './SidebarMenu.module.css';
import Link from 'next/link';
import { navLinks } from '../../data/links';

export const SidebarMenu = () => {
  return (
    <div className={styles.side_menu}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
