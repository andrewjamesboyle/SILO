import React, { useState } from 'react'

import axios from 'axios'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { useMap } from 'src/context/MapContext'

const SearchDataComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [aoi, setAoi] = useState('')
  const { state, dispatch } = useMap()

  const handleSearchClick = async () => {
    const baseUrl =
      aoi === 'parcel'
        ? `http://146.190.37.102:9000/collections/public.parcels/items.json?filter=num=${searchQuery}`
        : `http://146.190.37.102:9000/collections/public.parcels/items.json?filter=site_addre='${searchQuery}'`

    try {
      const response = await axios.get(baseUrl)
      console.log(response.data)
      // TO DO: additional logic here to display results
      // const coordinates = extractCoordinatesFromResponse(response) TO DO: write a function to extract coordinates from the response
      // dispatch({ type: 'SET_MAP_CENTER', payload: coordinates })
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  return (
    <>
      <form
        className="relative flex flex-1"
        action="#"
        method="GET"
        onSubmit={(e) => {
          e.preventDefault()
          handleSearchClick()
        }}
      >
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          aria-hidden="true"
        />
        <input
          id="search-field"
          className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* Render input elements for `aoi` and `search` here */}
        <label>
          <select value={aoi} onChange={(e) => setAoi(e.target.value)}>
            <option value="" disabled>
              Select Area of Interest
            </option>
            <option value="parcel">Parcel</option>
            <option value="address">Address</option>
          </select>
        </label>
      </div>
    </>
  )
}

export default SearchDataComponent
