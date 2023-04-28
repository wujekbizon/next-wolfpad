import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi, ChatCompletionRequestMessage, ChatCompletionRequestMessageRoleEnum } from 'openai'

interface Chatbot extends ChatCompletionRequestMessage {
  role: ChatCompletionRequestMessageRoleEnum
  content: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'This is Chatbot ' })
  }

  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(configuration)
    const { prompt } = req.body
    let history: any = []

    while (true) {
      let messages: Chatbot[] = []

      for (const [input_text, completion_text] of history) {
        messages.push({ role: 'user', content: input_text })
        messages.push({ role: 'assistant', content: completion_text })
      }

      messages.push({ role: 'user', content: prompt })

      try {
        const response = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',

          messages: messages,
          // temperature: 0,
          max_tokens: 200
          // top_p: 1,
          // frequency_penalty: 0.5,
          // presence_penalty: 0
        })

        console.log(history, messages)

        const completion_text = response.data.choices[0]?.message?.content

        history.push([prompt, completion_text])

        return res.status(200).json({
          bot: completion_text
        })
      } catch (error) {
        if (error instanceof Error) {
          return res.status(500).json({ message: error.message })
        } else {
          console.log(error)
        }
      }
    }
  }
}

export default handler
