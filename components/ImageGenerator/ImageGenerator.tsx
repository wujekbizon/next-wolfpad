import styles from './ImageGenerator.module.css'
import { useRef } from 'react'
import { getImageAndSave } from '../../helpers/chatApiCalls'

const ImageGenerator = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!formRef.current) {
      return
    }

    const data = new FormData(formRef.current)

    getImageAndSave(data)
  }

  return (
    <section className={styles.image_generator}>
      <form className={styles.form} onSubmit={onHandleSubmit} ref={formRef}>
        <input name="prompt" type="text" placeholder="generate an image..." />
        <button>Generate Image</button>
      </form>
    </section>
  )
}
export default ImageGenerator
