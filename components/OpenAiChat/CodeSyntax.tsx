import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import md from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('ts', ts)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('md', md)

interface CodeSyntaxProps {
  children: string
  language: string
}

const CodeSyntax: React.FC<CodeSyntaxProps> = ({ children, language }) => {
  return (
    <SyntaxHighlighter
      style={coldarkDark}
      wrapLongLines={true}
      language={language}
      customStyle={{
        minHeight: '65px',
        width: '100%',
        overflow: 'hidden',
        paddingLeft: '30px',
        paddingRight: '30px',
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
export default CodeSyntax
