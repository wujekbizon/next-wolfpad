import styles from './Resizable.module.css';
import { useEffect, useState } from 'react';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  const [innerHeight, setInnerHeight] = useState(300);
  const [innerWidth, setInnerWidth] = useState(500);
  const [width, setWidth] = useState(innerWidth * 0.75);

  let resizableProps: ResizableBoxProps;

  useEffect(() => {
    let timer: NodeJS.Timer;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [width]);

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      height: Infinity,
      width,
      resizeHandles: ['e'],
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      onResizeStop: (event, { size }) => {
        setWidth(size.width);
      },
    };
  } else {
    resizableProps = {
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
      minConstraints: [Infinity, 40],
      maxConstraints: [Infinity, innerHeight * 0.9],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};
export default Resizable;
