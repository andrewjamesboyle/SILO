import React, { useState } from 'react'

import axios from 'axios'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchDataComponent: React.FC = () => {
  const [aoi, setAoi] = useState<string>('')
  const [search, setSearch] = useState<string>('')

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        {/* Render input elements for `aoi` and `query` here */}
        {/* <label>
        Area of Interest:
        <select value={aoi} onChange={(e) => setAoi(e.target.value)}>
          <option value="" disabled>
            Select Area of Interest
          </option>
          <option value="parcel">Parcel</option>
          <option value="address">Address</option>
        </select>
      </label> */}

        {/* <label>
        Search:
        <input
          type="text"
          value={search}
          placeholder="Enter Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </label> */}
      </div>
    </div>
  )
}

export default SearchDataComponent
