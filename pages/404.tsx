import dynamic from 'next/dynamic';
const DynamicCustomError = dynamic(
  () => import('../components/CustomError/CustomError'),
  {
    loading: () => (
      <div className="dynamic-loader">
        <h1>404....</h1>
      </div>
    ),
  }
);

const ErrorPage = () => {
  return <DynamicCustomError />;
};
export default ErrorPage;
