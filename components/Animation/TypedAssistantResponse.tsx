import { useState, useEffect, memo } from 'react'

type Props = {
  text: string
  delay?: number
}

const TypedAssistantResponse = ({ text, delay = 40 }: Props) => {
  const [revealedLetter, setRevealedLetters] = useState(0)
  const interval = setInterval(() => setRevealedLetters((l) => l + 2), delay)

  useEffect(() => {
    if (revealedLetter === text.length) clearInterval(interval)
  }, [text, interval, revealedLetter])

  useEffect(() => {
    return () => clearInterval(interval)
  }, [interval, revealedLetter])

  return <>{text?.slice(0, revealedLetter)}</>
}

export default memo(TypedAssistantResponse)
