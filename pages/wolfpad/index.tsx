import dynamic from 'next/dynamic';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const DynamicCellList = dynamic(
  () => import('../../components/CellList/CellList'),
  {
    loading: () => <ProgressBar />,
    ssr: false,
  }
);

const PlaygroundPage = () => {
  return <DynamicCellList />;
};
export default PlaygroundPage;
