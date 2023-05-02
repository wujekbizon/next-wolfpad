import { useState } from 'react'

const FilesReader = () => {
  const [fileContent, setFileContent] = useState('')

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }

    const file = event.target.files[0]
    if (file && file.type.match('javascript.*')) {
      const reader = new FileReader()
      reader.readAsText(file, 'UTF-8')

      reader.onload = async (e) => {
        if (!e.target?.result) {
          return
        }
        const content = e.target?.result.toString()

        setFileContent(content)
      }
    } else {
      console.log('Invalid file type, please select a JavaScript file.')
    }
  }

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      {/* <pre>{fileContent}</pre> */}
    </>
  )
}

export default FilesReader
