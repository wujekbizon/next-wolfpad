import { useState } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import Preview from '../Preview/Preview';
import codeProcessor from '../../bundler';

const CodeCell = () => {
  const [input, setInput] = useState('');
  // const [error, setError] = useState('');
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
      <CodeEditor initialValue={input} onChange={handleEditorChange} />
      <button onClick={onClickHandler}>Submit</button>
      <Preview code={code} />
    </>
  );
};
export default CodeCell;
