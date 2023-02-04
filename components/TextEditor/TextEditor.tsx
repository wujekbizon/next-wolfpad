import { useEffect, useState } from 'react';
import { Cell } from '../../state/cell';
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
import ToolbarPlugin from './Plugins/ToolbarPlugin';
import CodeHighlightPlugin from './Plugins/CodeHighlightPlugin';
import ActionsPlugin from './Plugins/ActionPlugin';
import Placeholder from './Placeholder';
import Resizable from '../Resizable/Resizable';

interface TextEditorProps {
  cell: Cell;
}

const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
};

const onError = (error: Error) => {
  console.error(error.message);
  throw error;
};

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const initialConfig = {
    namespace: 'Wolfpad_Editor',
    // editorState: prepopulatedText,
    theme: exampleTheme,
    onError,

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
      <div className="editor-container">
        <ToolbarPlugin />
        <Resizable direction="vertical">
          <div className="editor-scroller">
            <div className="editor-inner">
              <RichTextPlugin
                contentEditable={<ContentEditable className="editor-input" />}
                placeholder={<Placeholder />}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <MyCustomAutoFocusPlugin />
              <ListPlugin />
              <LinkPlugin />
              <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
              <CodeHighlightPlugin />
              <ActionsPlugin />
            </div>
          </div>
        </Resizable>
      </div>
    </LexicalComposer>
  );
};
export default TextEditor;
