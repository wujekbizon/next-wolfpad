import { useCallback, useMemo } from 'react'
import { useActions } from '../../hooks/useActions'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { updateChatHistory } from '../../state/thunks/updateChatHistory'
import styles from './UserInput.module.css'
import { debounce } from '../../helpers/debounce'

const UserInput = () => {
  const dispatch = useAppDispatch()
  const { userInputValue, conversations, isLoading, hasExceedTokensThreshold } = useTypedSelector((state) => state.chat)
  const { updateUserInputValue } = useActions()

  const chatHistory = useMemo(
    () => [...conversations, { role: 'user', content: userInputValue }],
    [conversations, userInputValue]
  )

  const onKeyDownHandler = useCallback(
    async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault() // Prevent the default Enter key behavior
        dispatch(updateChatHistory(chatHistory))
      }
    },
    [dispatch, chatHistory]
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateUserInputValue(event.target.value)
  }

  const handleTextAreaInput = useCallback(
    debounce((event: React.FormEvent<HTMLTextAreaElement>) => {
      // Adjust the textarea input height
      const target = event.target as HTMLTextAreaElement
      target.style.height = 'auto'
      target.style.height = `${target.scrollHeight}px`
    }, 10),
    []
  )

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
