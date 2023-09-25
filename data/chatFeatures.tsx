import {
  WebConsulting,
  ProgressiveWeb,
  Backend,
  CloudWeb,
  Engineer,
  EnterpriseWeb,
  Frontend,
  Manager,
} from '../components/Icons'

export const chatFeatures = [
  {
    title: 'Advanced Language Translator',
    content:
      'WolfpadAI is an advanced language translator that excels in accurately and fluently translating text between multiple languages.',
    icon: <WebConsulting width={45} height={45} />,
    prompt: {
      promptTitle: 'Write in English - to translate French to Chinese:',
      examplePrompt: 'Today is a very sunny day.',
      btnText: 'Translate AI',
      promptValue:
        "Translate following English text to French and then to Chinese. Show the answer to the user in following format (<english text> - in french: <french text>. Translation to Chinese: <Chinese text>) for example: 'I'm happy to help you today. - in French means: Je suis heureux de vous aider aujourd'hui. Translation to Chinese: 我很高兴能在今天帮助您。'",
    },
    language: 'md',
  },
  {
    title: 'Code Review',
    content: 'Wolfpad AI can generate code review based on the code you provide it.',
    icon: <Backend width={45} height={45} />,
    prompt: {
      promptTitle: 'Generate code review based on code snippet:',
      examplePrompt: `import dynamic from 'next/dynamic';
      const DynamicCustomError = dynamic(
        () => import('../components/CustomError/CustomError'),
        {
          loading: () => (
            <div className="dynamic-loader">
              <h1>404....</h1>
            </div>
          ),
        }
      );
      
      const ErrorPage = () => {
        return <DynamicCustomError />;
      };
      export default ErrorPage;
     `,
      btnText: 'Code AI',
      promptValue:
        'Generate a code review based on the provided code snippet. If the code can be optimized, please provide some tips on how to accomplish this.',
    },
    language: 'tsx',
  },
  {
    title: 'Business Plan Builder.',
    content:
      'WolfpadAI can quickly and effectively create a simple business plan for your new project; all you need to do is describe the vision of what you want to build.',
    icon: <Manager width={45} height={45} />,
    prompt: {
      promptTitle: 'Creating business plans in few steps:',
      examplePrompt:
        'I want to build a wedding planning mobile application, create a website for my business, and hire people to handle the heavy lifting.',
      btnText: 'Builder AI',
      promptValue:
        "You are a business plan counselor. You will be prompted by the user with his basic idea for a business. Your task is to build a well-structured business plan based on the user's needs. Wrap your plan in a list of 10 main points of how the user can start his business.",
    },
    language: 'md',
  },
]
