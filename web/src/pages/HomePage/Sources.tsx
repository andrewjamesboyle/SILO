import { useState } from 'react'
import LocationDropdowns from './LocationDropdown'
import ContactUs from './ContactUs'

export default function Sources() {
  const [selectedOptions, setSelectedOptions] = useState({
    country: '',
    state: '',
    county: '',
    city: '',
  })

  const handleSelectionChange = (category, value) => {
    console.log(`Selected ${category}: ${value}`)
    setSelectedOptions((prevState) => ({
      ...prevState,
      [category]: value,
    }))
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
          <div className="justify-between">
            <LocationDropdowns onSelectionChange={handleSelectionChange} />
          </div>
        </div>

        <ContactUs />

        {/* Containing div for layers */}
        <div
          id="layers"
          className="flex text-l text-black justify-center items-center bg-white py-24 my-10 sm:py-32 h-full w-full shadow-xl rounded-md"
        >
          {/* It might be better to use this version, we'll  */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 z-10 backdrop-blur p-4 text-gray-500">
              {selectedOptions.country ? (
                <LayerData selectedOptions={selectedOptions} />
              ) : (
                '(Layer data renders here)'
              )}
            </div>
          </div>
          {/* <LayerData selectedOptions={selectedOptions} /> */}
        </div>
      </div>
    </div>
  )
}
// Used only in this component, keeping here for now to keep state in one place
const LayerData = ({ selectedOptions }) => {
  return (
    <div className="flex justify-between space-x-4">
      <div>{selectedOptions.country}</div>
      <div>{selectedOptions.state}</div>
      <div>{selectedOptions.county}</div>
      <div>{selectedOptions.city}</div>
    </div>
  )
}
