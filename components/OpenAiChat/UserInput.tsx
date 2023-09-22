import { useCallback } from 'react'
import { useActions } from '../../hooks/useActions'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { updateChatHistory } from '../../state/thunks/updateChatHistory'
import styles from './UserInput.module.css'

const UserInput = () => {
  const dispatch = useAppDispatch()
  const { userInputValue, conversations, isLoading } = useTypedSelector((state) => state.chat)
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

  return (
    <div className={styles.input_container}>
      {isLoading ? (
        <div className={styles.loading_skeleton} />
      ) : (
        <textarea
          placeholder="Send a message"
          value={userInputValue}
          onChange={handleInputChange}
          onKeyDown={onKeyDownHandler}
          className={styles.user_input}
          autoCorrect="on"
          id="prompt"
        />
      )}
    </div>
  )
}
export default UserInput
