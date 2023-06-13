import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration)
    const { messages } = req.body

    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        max_tokens: 2400,
        messages: messages,
      })

      res.status(200).json({ result: completion.data })
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
