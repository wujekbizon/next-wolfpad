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
    <section style={{ padding: '3rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Wolfpad</h1>
      </div>
      <textarea
        style={{ width: '100%', height: '250px' }}
        value={inputValue}
        onChange={(e) => onChange(e)}
      />
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
