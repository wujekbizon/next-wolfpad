import styles from './CodeEditor.module.css';
import { useState, useEffect, useMemo } from 'react';
import MonacoEditor from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import ActionButton from '../ActionButton/ActionButton';
import { BsSun, BsMoon } from 'react-icons/bs';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  const [editorTheme, setEditorTheme] = useState('vs-dark');

  const memoizeHandleKeyPress = useMemo(() => {
    return (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        try {
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
        } catch (error) {
          if (error instanceof Error) {
            // later use global state to get this error
            console.log(error);
          }
        }
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
        <ActionButton
          className={styles.button}
          icon={<BsSun />}
          onClick={() => setEditorTheme('light')}
        />
      ) : (
        <ActionButton
          icon={<BsMoon />}
          className={styles.button}
          onClick={() => setEditorTheme('vs-dark')}
        />
      )}
    </div>
  );
};
export default CodeEditor;
