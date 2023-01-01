import styles from './CodeCell.module.css';
import { useEffect, useState } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Preview from '../Preview/Preview';
import codeProcessor from '../../bundler';
import Resizable from '../Resizable/Resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => {
    const timer: NodeJS.Timer = setTimeout(async () => {
      const output = await codeProcessor(input);
      if (!output) {
        return;
      }

      setCode(output.code);
      setError(output.err);
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
          <Preview code={code} error={error} />
        </div>
      </Resizable>
    </>
  );
};
export default CodeCell;
