import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

const BeatAiPage = () => {
  return <div>BeatAiPage</div>
}
export default BeatAiPage
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
