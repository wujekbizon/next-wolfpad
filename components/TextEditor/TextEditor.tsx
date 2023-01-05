import styles from './Text.module.css';
import { useEffect } from 'react';
import exampleTheme from './Themes';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { TRANSFORMERS } from '@lexical/markdown';

import prepopulatedText from './SampleText';
import ToolbarPlugin from './Plugins/ToolbarPlugin';
import CodeHighlightPlugin from './Plugins/CodeHighlightPlugin';
import ActionsPlugin from './Plugins/ActionPlugin';
// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
};

const Placeholder = () => {
  return (
    <div className={styles.editor_placeholder}>
      Play around with the Markdown plugin...
    </div>
  );
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
const onError = (error: Error) => {
  console.error(error.message);
  throw error;
};

const TextEditor = () => {
  const initialConfig = {
    namespace: 'Wolfpad_Editor',
    editorState: prepopulatedText,
    theme: exampleTheme,
    onError,
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={styles.editor_container}>
        <ToolbarPlugin />
        <div>
          <RichTextPlugin
            contentEditable={
              <ContentEditable className={styles.editor_input} />
            }
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MyCustomAutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <CodeHighlightPlugin />
        </div>
        <ActionsPlugin />
      </div>
    </LexicalComposer>
  );
};
export default TextEditor;
