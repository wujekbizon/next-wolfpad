import { useCallback } from 'react'
import { useActions } from '../../hooks/useActions'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { updateChatHistory } from '../../state/thunks/updateChatHistory'
import styles from './UserInput.module.css'

const UserInput = () => {
  const dispatch = useAppDispatch()
  const { userInputValue, conversations, isLoading, hasExceedTokensThreshold } = useTypedSelector((state) => state.chat)
  const { updateUserInputValue } = useActions()

  const onKeyDownHandler = useCallback(
    async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        const chatHistory = [...conversations, { role: 'user', content: userInputValue }]
        dispatch(updateChatHistory(chatHistory))
      }
    },
    [dispatch, conversations, userInputValue]
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateUserInputValue(event.target.value)
  }

  const handleTextAreaInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    // Adjust the textarea input height
    const target = event.target as HTMLTextAreaElement
    target.style.height = 'auto'
    target.style.height = `${target.scrollHeight}px`
  }

  return (
    <div className={styles.input_container}>
      {isLoading ? (
        <div className={`${styles.loading_skeleton} ${styles.glassmorphism}`} />
      ) : (
        <textarea
          placeholder={
            hasExceedTokensThreshold
              ? 'You exceeded daily limit of requests. Please contact admin, for further instructions.'
              : 'Send a message'
          }
          value={userInputValue}
          onChange={handleInputChange}
          onKeyDown={onKeyDownHandler}
          onInput={handleTextAreaInput}
          className={`${styles.user_input} ${styles.glassmorphism}`}
          autoCorrect="on"
          id="prompt"
          disabled={hasExceedTokensThreshold}
        />
      )}
    </div>
  )
}
export default UserInput
