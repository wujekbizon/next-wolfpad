import styles from './SplashScreen.module.css'
import React, { useState, useEffect } from 'react'

const SplashScreen = ({ loadingTime }: { loadingTime: number }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (progress >= 100) {
      return
    }

    // Calculate progress increment dynamically
    const increment = (100 - progress) / (loadingTime * 0.015)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 10)

    return () => {
      clearInterval(interval)
    }
  }, [progress, loadingTime])

  return (
    <main className={`${styles.splash_screen} ${styles.black_gradient} ${progress > 100 ? styles.fade_out : ''} `}>
      <h1>Wolfpad</h1>
      <h1>AI</h1>
      <div className={styles.progress_bar}>
        <div className={styles.progress_circle} style={{ width: `${progress}%` }}>
          <span>{Math.round(progress)}%</span>
        </div>
      </div>
    </main>
  )
}
export default SplashScreen
