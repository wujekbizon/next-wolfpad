import dynamic from 'next/dynamic'
import ProgressBar from './ProgressBar/ProgressBar'

const DynamicExcalidraw = dynamic(() => import('./Excalidraw/Excalidraw'), {
  loading: () => (
    <div className="dynamic-loader">
      <ProgressBar />
    </div>
  ),
  ssr: false,
})

const DynamicTextEditor = dynamic(() => import('./TextEditor/TextEditor'), {
  loading: () => (
    <div className="dynamic-loader">
      <ProgressBar />
    </div>
  ),
  ssr: false,
})

const DynamicCodeCell = dynamic(() => import('./CodeCell/CodeCell'), {
  loading: () => (
    <div className="dynamic-loader">
      <ProgressBar />
    </div>
  ),
  ssr: false,
})

const DynamicOpenAIChat = dynamic(() => import('./OpenAiChat/OpenAIChat'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export { DynamicExcalidraw, DynamicTextEditor, DynamicCodeCell, DynamicOpenAIChat }
