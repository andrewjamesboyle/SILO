import { useState } from 'react'
import LocationDropdowns from './LocationDropdown'

export default function Sources() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const dropdowns = [
    { title: 'Country', content: 'List of Countries' },
    { title: 'State', content: 'List of States' },
    { title: 'County', content: 'List of Counties' },
    { title: 'City', content: 'List of Cities' },
  ]

  const handleDropdownClick = (dropdownTitle) => {
    setActiveDropdown(dropdownTitle === activeDropdown ? null : dropdownTitle)
  }

  const handleSelectionChange = (category, value) => {
    console.log(`Selected ${category}: ${value}`)
    // Handle the selection change logic here
  }

  return (
    <div
      id="sources"
      className="flex justify-center items-center bg-none py-24 sm:py-32 h-full w-full"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Sources Page */}
        <div className="mx-auto max-w-2xl lg:mx-0 z-10 backdrop-blur p-4">
          <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
            Sources{' '}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Public data is sourced at the Federal, State, County, and in some
            regions, at the Municipal level. Navigate to the area of interest to
            find links, the specific layers currently available, where you can
            find them within our layer hierarchy and how often they are being
            updated. Layers without an asterisk are linked through a partnership
            with the source jurisdiction or through advanced programming
            interfaces and are always reflecting the most up to date data. The
            number of asterisks corresponds to the frequency at which that layer
            is currently updated. <br />
            <br />* Layers updated monthly <br />
            ** Layers updated biweekly <br />
            *** Layers updated weekly <br />
            <br />
            We are in a constant state of building out the database to contain
            more data. If you don't see your area of interest represented, reach
            out to us with the specifics and we will add it to our queue. We
            respond to inquiries within 24 hours and dependent on the data
            source aim to have requests filled within 72 hours.
          </p>
        </div>

        {/* Dropdown divs */}
        <div className="flex justify-center space-x-4 mt-8">
          {/* {dropdowns.map((dropdown) => (
            <div key={dropdown.title} className="flex flex-col items-center">
              <div
                className="p-4 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
                onClick={() => handleDropdownClick(dropdown.title)}
              >
                {dropdown.title}
              </div>
              {activeDropdown === dropdown.title && (
                <div className="mt-2 p-4 bg-gray-100 rounded">
                  {dropdown.content}
                </div>
              )}
            </div>
          ))} */}
          <div className="justify-between">
            <LocationDropdowns onSelectionChange={handleSelectionChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
