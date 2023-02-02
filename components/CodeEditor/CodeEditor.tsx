import styles from './CodeEditor.module.css';
import { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import ActionButton from '../ActionButton/ActionButton';
import { BsSun, BsMoon } from 'react-icons/bs';
import { SiPrettier } from 'react-icons/si';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const [editorTheme, setEditorTheme] = useState('vs-dark');

  const onformatClick = () => {
    const formattedCode = prettier
      .format(initialValue, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');

    onChange(formattedCode);
  };

  return (
    <div className={styles.editor_wrapper}>
      <ActionButton
        onClick={onformatClick}
        icon={<SiPrettier />}
        className={styles.btn_format}
      />
      <MonacoEditor
        height="100%"
        language="javascript"
        theme={editorTheme}
        options={{
          minimap: {
            enabled: false,
          },
          wordWrap: 'on',
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
        value={initialValue}
        onChange={onChange}
      />
      {editorTheme === 'vs-dark' ? (
        <ActionButton
          className={styles.btn_mode}
          icon={<BsSun />}
          onClick={() => setEditorTheme('light')}
        />
      ) : (
        <ActionButton
          icon={<BsMoon />}
          className={styles.btn_mode}
          onClick={() => setEditorTheme('vs-dark')}
        />
      )}
    </div>
  );
};
export default CodeEditor;
