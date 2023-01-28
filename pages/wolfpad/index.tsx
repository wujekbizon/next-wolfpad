import dynamic from 'next/dynamic';

const DynamicCellList = dynamic(
  () => import('../../components/CellList/CellList'),
  {
    loading: () => <p>Loading App...</p>,
    ssr: false,
  }
);

const PlaygroundPage = () => {
  return (
    <>
      <DynamicCellList />
    </>
  );
};
export default PlaygroundPage;
