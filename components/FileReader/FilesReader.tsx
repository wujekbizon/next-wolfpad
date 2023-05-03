import styles from './FilesReader.module.css'
import { RiFileTextFill } from 'react-icons/ri'
import { fetchCodeReview } from '../../helpers/chatApiCalls'
import { toast } from 'react-toastify'

const FilesReader = () => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }

    const file = event.target.files[0]

    //  check if file name extension is one of : 'ts', 'js', 'jsx', 'tsx'
    if (file && ['js', 'jsx', 'ts', 'tsx'].includes(file.name.split('.')[1])) {
      const reader = new FileReader()

      reader.readAsText(file, 'UTF-8')

      reader.onload = async (e) => {
        if (!e.target?.result) {
          return
        }
        const content = e.target?.result.toString()

        const data = await fetchCodeReview(content)
      }
      toast.success('Getting your code review, please wait.')
    } else {
      toast.error('Invalid file type, please select a JavaScript/Typescript file.')
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
