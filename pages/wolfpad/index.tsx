import dynamic from 'next/dynamic';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import CellList from '../../components/CellList/CellList';

const DynamicCellList = dynamic(
  () => import('../../components/CellList/CellList'),
  {
    loading: () => (
      <div className="dynamic-loader">
        <ProgressBar />
      </div>
    ),
    ssr: false,
  }
);

const PlaygroundPage = () => {
  return (
    <>
      <CellList />
    </>
  );
};
export default PlaygroundPage;
