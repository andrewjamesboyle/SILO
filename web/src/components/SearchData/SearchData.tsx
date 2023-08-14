import React, { useState } from 'react'

import axios from 'axios'

const SearchDataComponent: React.FC = () => {
  const [aoi, setAoi] = useState<string>('')
  const [query, setQuery] = useState<string>('')

  const handleSearchClick = async () => {
    const baseUrl =
      aoi === 'parcel'
        ? `http://146.190.37.102:9000/collections/public.parcels/items.json?filter=num=${query}`
        : `http://146.190.37.102:9000/collections/public.parcels/items.json?filter=site_addre='${query}'`

    try {
      const response = await axios.get(baseUrl)
      console.log(response.data)
      // You would probably do more with the data here, such as displaying it on the map.
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <div>
      {/* Render input elements for `aoi` and `query` here */}
      <label>
        Area of Interest:
        <select value={aoi} onChange={(e) => setAoi(e.target.value)}>
          <option value="" disabled>
            Select Area of Interest
          </option>
          <option value="parcel">Parcel</option>
          <option value="address">Address</option>
        </select>
      </label>

      <label>
        Query:
        <input
          type="text"
          value={query}
          placeholder="Enter query..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <button onClick={handleSearchClick}>Search</button>
    </div>
  )
}

export default SearchDataComponent
