import { useState, useEffect, useCallback } from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from '../../plugins/unpkg-path-plugin';
import { fetchPlugin } from '../../plugins/fetch-plugin';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import Preview from '../../components/Preview/Preview';

const PlaygroundPage = () => {
  const [input, setInput] = useState('');
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState('');
  const [code, setCode] = useState('');

  const startService = useCallback(() => {
    if (initialized) {
      return;
    }

    try {
      esbuild.initialize({
        worker: true,
        wasmURL: 'https://unpkg.com/esbuild-wasm@0.15.14/esbuild.wasm',
      });
      setInitialized(true);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  }, [initialized]);

  useEffect(() => {
    startService();
  }, [startService]);

  const onClickHandler = async () => {
    if (!initialized) {
      return;
    }

    try {
      const result = await esbuild.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      });

      setCode(result.outputFiles[0].text);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        setError(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const handleEditorChange = (value = '') => {
    setInput(value);
  };

  return (
    <>
      <CodeEditor initialValue={input} onChange={handleEditorChange} />

      <button onClick={onClickHandler}>Submit</button>
      <Preview code={code} error={error} />
    </>
  );
};
export default PlaygroundPage;
