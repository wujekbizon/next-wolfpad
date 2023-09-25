export interface ChatFeatureCardInterface {
  title: string
  content: string
  icon: JSX.Element
  prompt: {
    promptTitle: string
    examplePrompt: string
    btnText: string
    promptValue: string
  }
  language: string
}
