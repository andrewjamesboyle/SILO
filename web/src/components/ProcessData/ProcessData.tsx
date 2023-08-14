import React, { useState } from 'react'

import axios from 'axios'

type DataTable =
  | 'mons'
  | 'control'
  | 'wetlands'
  | 'testpit'
  | 'soilbore'
  | 'boundary'
  | 'boundarystb'
  | 'ordhwtr'
  | 'ordhwtrstb'
  | 'meanhighwtr'
  | 'wetlandsln'
  | 'wetlandslnbuf'
  | 'misc'

const ProcessDataComponent: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<DataTable | null>(null)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)

  const handleProcessClick = async () => {
    if (!selectedTable || !uploadedFile) {
      alert('Please select a data type and upload a file.')
      return
    }

    const filename = uploadedFile.split(/[\\\/]/).pop()
    const baseUrl = `http://146.190.37.102:5000/process?tbl=${selectedTable}&dataset=${filename}`

    try {
      const response = await axios.get(baseUrl)
      console.log(response.data)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="mons"
            checked={selectedTable === 'mons'}
            onChange={() => setSelectedTable('mons')}
          />
          Mons
        </label>
        <label>
          <input
            type="radio"
            value="control"
            checked={selectedTable === 'control'}
            onChange={() => setSelectedTable('control')}
          />
          Control
        </label>
        <label>
          <input
            type="radio"
            value="wetlands"
            checked={selectedTable === 'wetlands'}
            onChange={() => setSelectedTable('wetlands')}
          />
          Wetlands
        </label>
        <label>
          <input
            type="radio"
            value="testpit"
            checked={selectedTable === 'testpit'}
            onChange={() => setSelectedTable('testpit')}
          />
          Testpit
        </label>
        <label>
          <input
            type="radio"
            value="soilbore"
            checked={selectedTable === 'soilbore'}
            onChange={() => setSelectedTable('soilbore')}
          />
          Soilbore
        </label>
        <label>
          <input
            type="radio"
            value="boundary"
            checked={selectedTable === 'boundary'}
            onChange={() => setSelectedTable('boundary')}
          />
          Boundary
        </label>
        <label>
          <input
            type="radio"
            value="boundarystb"
            checked={selectedTable === 'boundarystb'}
            onChange={() => setSelectedTable('boundarystb')}
          />
          Boundarystb
        </label>
        <label>
          <input
            type="radio"
            value="ordhwtr"
            checked={selectedTable === 'ordhwtr'}
            onChange={() => setSelectedTable('ordhwtr')}
          />
          Ordhwtr
        </label>
        <label>
          <input
            type="radio"
            value="ordhwtrstb"
            checked={selectedTable === 'ordhwtrstb'}
            onChange={() => setSelectedTable('ordhwtrstb')}
          />
          Ordhwtrstb
        </label>
        <label>
          <input
            type="radio"
            value="meanhighwtr"
            checked={selectedTable === 'meanhighwtr'}
            onChange={() => setSelectedTable('meanhighwtr')}
          />
          Meanhighwtr
        </label>
        <label>
          <input
            type="radio"
            value="wetlandsln"
            checked={selectedTable === 'wetlandsln'}
            onChange={() => setSelectedTable('wetlandsln')}
          />
          Wetlandsln
        </label>
        <label>
          <input
            type="radio"
            value="wetlandslnbuf"
            checked={selectedTable === 'wetlandslnbuf'}
            onChange={() => setSelectedTable('wetlandslnbuf')}
          />
          Wetlandslnbuf
        </label>
        <label>
          <input
            type="radio"
            value="misc"
            checked={selectedTable === 'misc'}
            onChange={() => setSelectedTable('misc')}
          />
          Misc
        </label>
      </div>
      <div>
        <input type="file" onChange={(e) => setUploadedFile(e.target.value)} />
      </div>
      <button onClick={handleProcessClick}>Process</button>
    </div>
  )
}

export default ProcessDataComponent
