import Image from 'next/image'
import styles from './Divider.module.css'
import { motion } from 'framer-motion'

type DividerProps = {
  children?: React.ReactNode
  className?: string
}

const Divider = ({ children, className }: DividerProps) => {
  return (
    <div className={`${className} ${styles.divider}`}>
      <motion.h1
        animate={{ opacity: [0.2, 1, 1, 1], x: ['-20vw', '0vw', '20vw', '0vw', '-20vw'] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {children}
      </motion.h1>
    </div>
  )
}
export default Divider
