import { useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import ColorsGenerator from '../../components/ColorsGenerator/ColorsGenerator'

const ColorsPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [colors, setColors] = useState([])

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    if (!formRef.current) {
      return
    }

    const data = new FormData(formRef.current)

    const response = await fetch('api/colors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: data.get('prompt')
      })
    })

    if (response.ok) {
      const data = await response.json()
      const parsedData = JSON.parse(data.bot.trim())
      setColors(parsedData)
    } else {
      const err = await response.text()
      console.log(err)
    }
  }
  return (
    <>
      <ColorsGenerator formRef={formRef} onHandleSubmit={onHandleSubmit} colors={colors} />
    </>
  )
}
export default ColorsPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}
