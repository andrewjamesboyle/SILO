// LocationDropdowns.jsx
import React, { useState } from 'react'

export default function LocationDropdowns({ onSelectionChange }) {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedCounty, setSelectedCounty] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const countries = ['United States']
  const states = ['Washington']
  const counties = ['Pierce']
  const cities = ['Tacoma']

  // Handle selection change
  const handleSelectionChange = (category, value) => {
    onSelectionChange(category, value)

    switch (category) {
      case 'country':
        setSelectedCountry(value)
        break
      case 'state':
        setSelectedState(value)
        break
      case 'county':
        setSelectedCounty(value)
        break
      case 'city':
        setSelectedCity(value)
        break
      default:
        break
    }
  }

  return (
    <div className="flex justify-between space-x-16 mt-8">
      {/* Country Dropdown */}
      <Dropdown
        name="country"
        value={selectedCountry}
        onChange={handleSelectionChange}
        options={countries}
      />

      {/* State Dropdown */}
      <Dropdown
        name="state"
        value={selectedState}
        onChange={handleSelectionChange}
        options={states}
      />

      {/* County Dropdown */}
      <Dropdown
        name="county"
        value={selectedCounty}
        onChange={handleSelectionChange}
        options={counties}
      />

      {/* City Dropdown */}
      <Dropdown
        name="city"
        value={selectedCity}
        onChange={handleSelectionChange}
        options={cities}
      />
    </div>
  )
}

function Dropdown({ name, value, onChange, options }) {
  return (
    <select
      title={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      className="p-2 rounded"
    >
      <option value="">{name.charAt(0).toUpperCase() + name.slice(1)}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
