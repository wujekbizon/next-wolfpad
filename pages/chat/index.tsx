import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

const DynamicChat = dynamic(() => import('../../components/Chat/Chat'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const ChatPage = () => {
  return (
    <>
      <DynamicChat />
    </>
  );
};

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

export default ChatPage;
