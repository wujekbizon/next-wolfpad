import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(configuration)
    const { prompt } = req.body

    let messages: ChatCompletionRequestMessage[] = [
      {
        role: 'system',
        content: ''
      }
    ]
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0
      })

      res.status(200).json({
        bot: response.data.choices[0]?.message?.content
      })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message })
      } else {
        console.log(error)
      }
    }
  }
}

export default handler
