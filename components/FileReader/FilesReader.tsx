import styles from './FilesReader.module.css'
import { RiFileTextFill } from 'react-icons/ri'

type FilesReaderProps = {
  setFileContent: (value: React.SetStateAction<string>) => void
}

const FilesReader = ({ setFileContent }: FilesReaderProps) => {
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
      <label htmlFor="file" className={styles.label}>
        <RiFileTextFill className={styles.icon} />
      </label>
      <input type="file" onChange={handleFileChange} id="file" className={styles.input_chat} />
    </>
  )
}

export default FilesReader
