import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let response
  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(configuration)

    try {
      const { prompt } = req.body

      response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are a color palette generating assistant that responds to text prompts for color palettes. You should generate color palettes that fit the theme, mood or instructions in the prompt. The palettes should be between 2 and 8 colors.'
          },
          {
            role: 'user',
            content:
              'Convert the following verbal description of a color palette into a list of colors: 4 Google brand colors'
          },
          {
            role: 'assistant',
            content: '["#4285F4","#DB4437","#F4B400","#0F9D58"]'
          },
          {
            role: 'user',
            content:
              'Convert the following verbal description of a color palette into a list of colors: nice happy colors'
          },
          {
            role: 'assistant',
            content: '["#F9D5E5","#FCD5CE","#FFF2CC","#BFE6BA","#BFD7EA"]'
          },
          {
            role: 'user',
            content:
              'Convert the following verbal description of a color palette into a list of colors: gotham city dark knight 8 colors'
          },
          {
            role: 'assistant',
            content: '["#1C1C1C","#2B2B2B","#3A3A3A","#4A4A4A","#5A5A5A","#6B6B6B","#7B7B7B","#8C8C8C"]'
          },
          {
            role: 'user',
            content: `Convert the following verbal description of a color palette into a list of colors: ${prompt}`
          }
        ],
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

  if (req.method === 'GET') {
    res.status(200).json({ message: 'AI Color Generator' })
  }
}

export default handler
