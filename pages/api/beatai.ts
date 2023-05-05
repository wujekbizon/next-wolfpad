import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai'
import { exampleJSON, biglistExampleJSON } from '../../data/songsExampleJSON'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(configuration)
    const { prompt, count } = req.body

    let messages: ChatCompletionRequestMessage[] = [
      {
        role: 'system',
        content: `You are a helpful platlist generating assistant. You should generate a list of songs and their artists according to a text prompt.
           You should return a JSON array , where each element follows this format: {"song": "song_title", "artist": "artist_name"}
          `
      },
      {
        role: 'user',
        content: `Generate a playlist of songs based on this prompt: Generate a playlist of 10 songs based on this prompt: super super sad songs`
      },
      {
        role: 'assistant',
        content: exampleJSON
      },
      {
        role: 'user',
        content: `Generate a playlist of songs based on this prompt: Generate a playlist of 25 songs based on this prompt: energy songs`
      },
      {
        role: 'assistant',
        content: biglistExampleJSON
      },
      {
        role: 'user',
        content: `Generate a playlist of ${count} songs based on this prompt: ${prompt}`
      }
    ]
    try {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 500
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
