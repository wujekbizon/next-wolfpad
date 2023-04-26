import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'This is Chatbot ' })
  }

  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(configuration)

    try {
      const { prompt } = req.body

      const response = await openai.createChatCompletion({
        //Can do any language task with better quality, longer output, and consistent instruction-following than the curie, babbage, or ada models. Also supports inserting completions within text.
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
        // temperature: 0,
        // max_tokens: 4000,
        // top_p: 1,
        // frequency_penalty: 0.5,
        // presence_penalty: 0
      })

      console.log(response.data)

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
