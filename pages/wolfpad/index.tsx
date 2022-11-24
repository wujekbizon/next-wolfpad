import { useState, useEffect, useCallback, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';
import CodeInput from '../../components/CodeInputs/CodeInput';
import { unpkgPathPlugin } from '../../plugins/unpkg-path-plugin';
import { fetchPlugin } from '../../plugins/fetch-plugin';

const PlaygroundPage = () => {
  const [input, setInput] = useState('');
  const [initialized, setInitialized] = useState(false);
  const iframeRef = useRef<any>(null);

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

    // reseting the contents of the iframe
    iframeRef.current.srcdoc = html;

    try {
      const result = await esbuild.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      });

      iframeRef.current.contentWindow.postMessage(
        result.outputFiles[0].text,
        '*'
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data)
            } catch(error) {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color:red"><h4>Runtime Error</h4>' +  error + '</div>'
              console.error(error);
            }
            
          }, false);
        </script>
      </body>
    </html>
  `;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <CodeInput
      code={html}
      onClickHandler={onClickHandler}
      inputValue={input}
      onChange={onChange}
      iframeRef={iframeRef}
    />
  );
};
export default PlaygroundPage;
