import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import CellList from '../../components/CellList/CellList';

const PlaygroundPage = () => {
  return (
    <>
      {' '}
      <CellList />
    </>
  );
};
export default PlaygroundPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
