import styles from './CodeCell.module.css';
import { useEffect, useState } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Preview from '../Preview/Preview';
import codeProcessor from '../../bundler';
import Resizable from '../Resizable/Resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer: NodeJS.Timer = setTimeout(async () => {
      try {
        const output = await codeProcessor(input);
        setCode(output);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log(error);
        }
      }
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <Resizable direction="vertical">
        <div className={styles.resizable_wrapper}>
          <Resizable direction="horizontal">
            <CodeEditor
              initialValue={input}
              onChange={(value = '') => setInput(value)}
            />
          </Resizable>
          <Preview code={code} />
        </div>
      </Resizable>
    </>
  );
};
export default CodeCell;
