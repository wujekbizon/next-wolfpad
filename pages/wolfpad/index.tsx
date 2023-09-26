import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { DynamicOpenAIChat } from '../../components'

const WolfpadAiPage = () => {
  return <DynamicOpenAIChat />
}
export default WolfpadAiPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
