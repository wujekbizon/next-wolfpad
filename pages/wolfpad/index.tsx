import dynamic from 'next/dynamic';
import { useTypedSelector } from '../../hooks/useTypedSelector';

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
  const cell = useTypedSelector((state) => {
    return state.cells.data[0];
  });
  return (
    <>
      <DynamicCodeCell cell={cell} />
      <DynamicTextEditor />
    </>
  );
};
export default PlaygroundPage;
