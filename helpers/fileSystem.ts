import fs from 'fs/promises'
import path from 'path'

export const saveImageToFile = async (rawImageData: string) => {
  const imageDirectoryName = 'images'
  // create directory if already doesn't exist
  await fs.mkdir(imageDirectoryName, { recursive: true })

  const imageDirectory = path.join(process.cwd(), imageDirectoryName)
  const imageName = 'image.png'
  const filePath = path.join(imageDirectory, imageName)

  // decoded raw data and write to file
  const decodedImageData = Buffer.from(rawImageData, 'base64')
  await fs.writeFile(filePath, decodedImageData, 'base64')
}
