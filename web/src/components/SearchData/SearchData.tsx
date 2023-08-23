import React, { Fragment, useState } from 'react'

import axios from 'axios'
import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* Render input elements for `aoi` and `query` here */}
        <label>
          <select value={aoi} onChange={(e) => setAoi(e.target.value)}>
            <option value="" disabled>
              Select Area of Interest
            </option>
            <option value="parcel">Parcel</option>
            <option value="address">Address</option>
          </select>
        </label>
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

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
      {/* Separator */}
      <div
        className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
        aria-hidden="true"
      />

      {/* Profile dropdown */}
      <Menu as="div" className="relative">
        <Menu.Button className="-m-1.5 flex items-center p-1.5">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span className="hidden lg:flex lg:items-center">
            <span
              className="ml-4 text-sm font-semibold leading-6 text-gray-900"
              aria-hidden="true"
            >
              Tom Cook
            </span>
            <ChevronDownIcon
              className="ml-2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-50' : '',
                      'block px-3 py-1 text-sm leading-6 text-gray-900'
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default SearchDataComponent
