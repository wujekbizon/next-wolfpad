import styles from './Logo.module.css'

type LogoProps = {
  title?: string
  className?: string
}

const Logo = ({ title, className }: LogoProps) => {
  return <h2 className={`gradient_text ${styles.logo} ${className}`}>{title}</h2>
}
export default Logo
