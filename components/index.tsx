import ChatBot from './ChatBot/ChatBot';
import dynamic from 'next/dynamic';
import ProgressBar from './ProgressBar/ProgressBar';

const DynamicExcalidraw = dynamic(() => import('./Excalidraw/Excalidraw'), {
  loading: () => (
    <div className="dynamic-loader">
      <ProgressBar />
    </div>
  ),
  ssr: false,
});

const DynamicTextEditor = dynamic(() => import('./TextEditor/TextEditor'), {
  loading: () => (
    <div className="dynamic-loader">
      <ProgressBar />
    </div>
  ),
  ssr: false,
});

const DynamicCodeCell = dynamic(() => import('./CodeCell/CodeCell'), {
  loading: () => (
    <div className="dynamic-loader">
      <ProgressBar />
    </div>
  ),
  ssr: false,
});

const DynamicChatBot = dynamic(() => import('./ChatBot/ChatBot'), {
  loading: () => (
    <div className="dynamic-loader">
      <ProgressBar />
    </div>
  ),
  ssr: false,
});

export {
  DynamicExcalidraw,
  DynamicTextEditor,
  DynamicCodeCell,
  DynamicChatBot,
};
