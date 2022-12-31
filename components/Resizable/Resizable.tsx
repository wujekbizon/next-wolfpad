import styles from './Resizable.module.css';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  return <div>Resizable Container</div>;
};
export default Resizable;
