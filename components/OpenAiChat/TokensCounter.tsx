import styles from './TokensCounter.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Token from './Token'

const TokensCounter = () => {
  const { usage } = useTypedSelector((state) => state.chat)
  return (
    <div className={styles.tokens}>
      <Token title="Prompt Tokens" token={usage.promptTokens} />
      <Token title="Completion Tokens" token={usage.completionTokens} />
      <Token title="Total Tokens" token={usage.totalTokens} />
    </div>
  )
}
export default TokensCounter
