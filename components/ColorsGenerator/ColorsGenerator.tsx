import styles from './ColorsGenerator.module.css'
import ColorBox from '../ColorBox/ColorBox'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { toast } from 'react-toastify'

const ColorsGenerator = () => {
  const { fetchColorsPalette } = useActions()
  const { colors, error } = useTypedSelector((state) => state.colors)
  const formRef = useRef<HTMLFormElement | null>(null)

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!formRef.current) {
      return
    }

    const data = new FormData(formRef.current)

    fetchColorsPalette(data)
  }

  useEffect(() => {
    if (error) {
      toast.error('Please provide a valid prompt')
    }
  }, [error])

  return (
    <section className={styles.colors}>
      {colors.length === 0 && (
        <>
          <div className={styles.title}>
            <h1>
              Get a Hue-tiful palette every time with <span>Huefiy</span>!
            </h1>
          </div>
          <div className={styles.image_contianer}>
            <Image
              src="/images/huefiy.png"
              alt="hueify"
              width={800}
              height={600}
              className={styles.image}
              priority={true}
            />
          </div>
        </>
      )}

      {colors.map((color) => (
        <ColorBox key={color} color={color} />
      ))}
      <form className={styles.form} onSubmit={onHandleSubmit} ref={formRef}>
        <input name="prompt" type="text" placeholder="sunset beach" />
        <button>Generate</button>
      </form>
    </section>
  )
}
export default ColorsGenerator
