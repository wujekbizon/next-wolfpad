import styles from './TokensCounter.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Token from './Token'
import { useWindowDimensions } from '../../hooks/useWindowDimension'

const TokensCounter = () => {
  const { usage } = useTypedSelector((state) => state.chat)
  const { width } = useWindowDimensions()

  return (
    <div className={styles.tokens}>
      {width > 450 ? <Token title="Prompt Tokens" token={usage.promptTokens} /> : ''}
      {width > 450 ? <Token title="Completion Tokens" token={usage.completionTokens} /> : ''}
      <Token title="Total Tokens" token={usage.totalTokens} />
    </div>
  )
}
export default TokensCounter
