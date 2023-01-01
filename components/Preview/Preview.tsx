import styles from './Preview.module.css';
import { useRef, useEffect } from 'react';

interface PreviewProps {
  code: string;
  error: string;
}

const html = `
<html>
   <head></head>
   <body>
     <div id="root"></div>
      <script>
        const handleError = (err) => {
        const root = document.querySelector('#root');
        root.innerHTML = '<div style="color: red; font-family:sans-serif;"><h4>Runtime Error</h4>' + err + '</div>'
        console.error(err);
        };

        window.addEventListener('error', (event) => {
          event.preventDefault();
          handleError(event.error);
        });

        window.addEventListener('message', (event) => {
          try {
            eval(event.data);
          } catch(err){
            handleError(err);
          }
        },false);

      </script>
   </body>
</html>
`;

const Preview: React.FC<PreviewProps> = ({ code, error }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    // reseting the contents of the iframe
    iframe.current.srcdoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className={styles.preview_wrapper}>
      <iframe
        title="preview"
        ref={iframe}
        sandbox="allow-scripts"
        srcDoc={html}
      />
      {error && (
        <div className={styles.preview_error}>
          <h3>Syntax Error</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
export default Preview;
