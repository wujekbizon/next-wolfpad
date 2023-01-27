import dynamic from 'next/dynamic';

const DynamicTextEditor = dynamic(
  () => import('../../components/TextEditor/TextEditor'),
  {
    loading: () => <p>Loading Text Editor</p>,
    ssr: false,
  }
);

const DynamicCodeCell = dynamic(
  () => import('../../components/CodeCell/CodeCell'),
  {
    loading: () => <p>Loading Code Editor</p>,
    ssr: false,
  }
);

const PlaygroundPage = () => {
  return (
    <>
      <DynamicCodeCell />
      <DynamicTextEditor />
    </>
  );
};
export default PlaygroundPage;
