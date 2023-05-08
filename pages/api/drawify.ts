import { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'
import { saveImageToFile } from '../../helpers/fileSystem'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    const openai = new OpenAIApi(configuration)
    const { prompt } = req.body

    try {
      const response = await openai.createImage({
        prompt: prompt,
        size: '512x512',
        n: 1,
        response_format: 'b64_json'
      })

      const rawImageData = response.data?.data[0]?.b64_json as string

      saveImageToFile(rawImageData)

      res.status(200).json({ message: 'Image saved successfully', data: rawImageData })
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error })
      } else {
        console.log(error)
      }
    }
  }
}

export default handler
