import React, { useState } from 'react'

import axios from 'axios'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchDataComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [aoi, setAoi] = useState('')

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
          className="block h-full w-full m-4 border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-xl"
          placeholder="Search..."
          type="search"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      {/* <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* Render input elements for `aoi` and `search` here */}
      {/* <label>
          <select value={aoi} onChange={(e) => setAoi(e.target.value)}>
            <option value="" disabled>
              Select Area of Interest
            </option>
            <option value="parcel">Parcel</option>
            <option value="address">Address</option>
          </select>
        </label>
      </div> */}
      <div className="flex items-center justify-evenly gap-x-4 lg:gap-x-6 bg-gray-300 pl-1 pr-1 pt-1 pb-1 rounded-xl w-full">
        <button
          className={`${
            aoi === 'parcel'
              ? 'bg-white text-black'
              : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-md w-1/2`}
          onClick={() => setAoi('parcel')}
        >
          Parcel
        </button>
        <button
          className={`${
            aoi === 'address'
              ? 'bg-white text-black'
              : 'bg-gray-300 text-gray-700'
          } py-2 px-4 rounded-md w-1/2`}
          onClick={() => setAoi('address')}
        >
          Address
        </button>
      </div>
    </>
  )
}

export default SearchDataComponent
