import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'

const UploadData: React.FC = () => {
  const [zipFile, setZipFile] = useState<File | null>(null)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setZipFile(files[0])
      console.log(zipFile)
    }
  }

  const handleSubmitFile = async (e: FormEvent) => {
    e.preventDefault()

    if (!zipFile) {
      console.error('no zipe file selected')
      return
    }

    const formData = new FormData()
    formData.append('zipFile', zipFile)

    try {
      // Replace the URL with your server endpoint
      const response = await axios.post(
        'http://146.190.37.102:5000/uploader',
        formData
      )

      console.log(response.status, response.data)
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <div>
      <h2>Upload Shape File</h2>
      <form onSubmit={(e) => handleSubmitFile(e)}>
        <input type="file" onChange={(e) => handleFileChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UploadData
