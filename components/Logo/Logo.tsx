import styles from './Logo.module.css';

type LogoProps = {
  title: string;
};

const Logo = ({ title }: LogoProps) => {
  return <h2 className={`gradient_text ${styles.logo}`}>{title}</h2>;
};
export default Logo;
