import styles from './CodeInput.module.css';

type CodeProps = {
  code: string;
  inputValue: string;
  onClickHandler: () => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  iframeRef: React.LegacyRef<HTMLIFrameElement>;
};

const CodeInput = ({
  code,
  onClickHandler,
  inputValue,
  onChange,
  iframeRef,
}: CodeProps) => {
  return (
    <section className={styles.wrapper}>
      <textarea value={inputValue} onChange={(e) => onChange(e)} />
      <div style={{ paddingBottom: '5px' }}>
        <button onClick={onClickHandler}>Submit</button>
      </div>

      <iframe
        title="preview"
        ref={iframeRef}
        sandbox="allow-scripts"
        srcDoc={code}
        width="100%"
      />
    </section>
  );
};
export default CodeInput;
