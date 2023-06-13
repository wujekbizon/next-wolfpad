import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'This is Chatbot ' })
  }

  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(configuration)
    const { prompt, codeReview } = req.body

    let messages: ChatCompletionRequestMessage[] = [
      {
        role: 'system',
        content: `You will recive a file's contents as text. Generate a code review for the file. Indicate what changes should be made to improve its style, performance, readability, and maintainability.
          If there are any reputable libraries that could be introduced to improve the code, suggest them. Be kind and construcive. For each suggested change, include line numbers to which you are referring.
        `
      },
      {
        role: 'user',
        content: `Code review the following file: ${prompt || codeReview}`
      }
    ]

    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0,
        max_tokens: 2000,
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
