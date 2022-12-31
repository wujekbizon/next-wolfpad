import styles from './CodeEditor.module.css';
import { useState, useEffect, useMemo } from 'react';
import MonacoEditor from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import Image from 'next/image';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const [editorTheme, setEditorTheme] = useState('vs-dark');

  const memoizeHandleKeyPress = useMemo(() => {
    return (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        const formatted = prettier
          .format(initialValue, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true,
          })
          .replace(/\n$/, '');

        onChange(formatted);
      }
    };
  }, [onChange, initialValue]);

  useEffect(() => {
    window.addEventListener('keydown', memoizeHandleKeyPress);

    return () => {
      window.removeEventListener('keydown', memoizeHandleKeyPress);
    };
  }, [memoizeHandleKeyPress]);

  return (
    <div className={styles.editor_wrapper}>
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
        <button
          className={styles.button}
          onClick={() => setEditorTheme('light')}
        >
          <Image src="/sun.svg" alt="light" width={15} height={15} />
        </button>
      ) : (
        <button
          className={styles.button}
          onClick={() => setEditorTheme('vs-dark')}
        >
          <Image src="/moon.svg" alt="dark" width={15} height={15} />
        </button>
      )}
    </div>
  );
};
export default CodeEditor;
