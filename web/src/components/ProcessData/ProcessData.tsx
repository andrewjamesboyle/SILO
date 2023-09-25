import React, { useState } from 'react'

import axios from 'axios'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const dataTables: DataTable[] = [
    'mons',
    'control',
    'wetlands',
    'testpit',
    'soilbore',
    'boundary',
    'boundarystb',
    'ordhwtr',
    'ordhwtrstb',
    'meanhighwtr',
    'wetlandsln',
    'wetlandslnbuf',
    'misc',
  ]

  const handleProcessClick = async () => {
    if (!selectedTable || !uploadedFile) {
      alert('Please select a data type and upload a file.')
      return
    }

    const filename = uploadedFile.name
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
      <ul role="list" className="-mx-2 mt-2 space-y-1">
        {dataTables.map((table) => (
          <li key={table}>
            <div
              className={classNames(
                selectedTable === table
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
              )}
            >
              <input
                type="radio"
                value={table}
                checked={selectedTable === table}
                onChange={() => setSelectedTable(table)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
              />
              <span className="truncate">
                {table.charAt(0).toUpperCase() + table.slice(1)}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="file"
          onChange={(e) =>
            setUploadedFile(e.target.files ? e.target.files[0] : null)
          }
          className="p-2 rounded-md text-sm leading-6 font-semibold"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleProcessClick}
          className="p-2 rounded-md bg-gray-800 text-white text-sm leading-6 font-semibold hover:bg-gray-700"
        >
          Upload
        </button>
      </div>
    </div>
  )
}

export default ProcessDataComponent
