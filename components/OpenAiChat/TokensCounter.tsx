import styles from './TokensCounter.module.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Token from './Token'
import { useWindowDimensions } from '../../hooks/useWindowDimension'
import { Blocks } from 'react-loader-spinner'

const TokensCounter = () => {
  const { usage, isLoading } = useTypedSelector((state) => state.chat)
  const { width } = useWindowDimensions()

  const totalAmountToPay = (usage.totalTokens / 1000) * 0.002

  return (
    <div className={styles.tokens}>
      {width > 450 ? <Token title="Prompt Tokens" token={usage.promptTokens} /> : ''}
      {width > 450 ? <Token title="Completion Tokens" token={usage.completionTokens} /> : ''}
      <Token title="Total Tokens" token={usage.totalTokens} />
      <div className={styles.total_amount}>
        <p>Amount to pay</p>
        {isLoading ? (
          <Blocks
            visible={true}
            height={18}
            width={18}
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        ) : (
          <span>${totalAmountToPay.toFixed(6)}</span>
        )}
      </div>
    </div>
  )
}
export default TokensCounter
