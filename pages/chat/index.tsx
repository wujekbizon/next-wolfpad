import dynamic from 'next/dynamic';

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

export default ChatPage;
