import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import ColorsGenerator from '../../components/ColorsGenerator/ColorsGenerator'

const ColorsPage = () => {
  return (
    <>
      <ColorsGenerator />
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
