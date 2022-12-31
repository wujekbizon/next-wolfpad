import styles from './CodeCell.module.css';
import { useState } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Preview from '../Preview/Preview';
import codeProcessor from '../../bundler';
import Resizable from '../Resizable/Resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClickHandler = async () => {
    const output = await codeProcessor(input);
    setCode(output);
  };

  const handleEditorChange = (value = '') => {
    setInput(value);
  };

  return (
    <>
      <Resizable direction="vertical">
        <div className={styles.resizable_wrapper}>
          <Resizable direction="horizontal">
            <CodeEditor initialValue={input} onChange={handleEditorChange} />
          </Resizable>
          <Preview code={code} />
        </div>
      </Resizable>
      {/* <button onClick={onClickHandler}>Submit</button> */}
    </>
  );
};
export default CodeCell;
