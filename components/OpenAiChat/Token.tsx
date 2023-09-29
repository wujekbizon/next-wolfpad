import { useTypedSelector } from '../../hooks/useTypedSelector'
import styles from './Token.module.css'
import { Blocks } from 'react-loader-spinner'

interface TokenCounter {
  title: string
  token: number
}

const Token: React.FC<TokenCounter> = ({ token, title }) => {
  const { isLoading } = useTypedSelector((state) => state.chat)

  return (
    <div className={styles.token}>
      <h4>{title}</h4>
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
        <p>{token}</p>
      )}
    </div>
  )
}
export default Token
