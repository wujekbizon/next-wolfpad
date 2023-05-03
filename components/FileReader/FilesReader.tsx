import styles from './FilesReader.module.css'
import { RiFileTextFill } from 'react-icons/ri'
import { useState } from 'react'
import { fetchCodeReview } from '../../helpers/chatApiCalls'
import { toast } from 'react-toastify'

const FilesReader = () => {
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

        const data = await fetchCodeReview(content)
      }
      toast.success('Getting your code review, please wait.')
    } else {
      toast.error('Invalid file type, please select a JavaScript file.')
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
