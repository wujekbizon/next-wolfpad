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
      // const { prompt } = req.body
      const prompt = `You are a color palette generating assistant that responds to text prompts for color palettes.  
      You should generate color palettes that fit the theme, mood or instructions in the prompt.
      The palettes should be between 2 and 8 colors.

      Desired Format: JSON array of hexadecimal color codes
      Text: a beautiful sunset 
      `

      response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0,
        max_tokens: 4000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0
      })

      console.log(response.data)

      res.status(200).json({
        bot: response.data.choices[0].text
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
    res.status(200).json({ response: response?.data.choices[0].text })
  }
}

export default handler
