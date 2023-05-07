import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import ImageGenerator from '../../components/ImageGenerator/ImageGenerator'

const DrawifyPage = () => {
  return <ImageGenerator />
}
export default DrawifyPage
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
