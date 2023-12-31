import React, { useState } from 'react'

const ContactUs = () => {
  const [isPopupVisible, setPopupVisible] = useState(false)

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible)
  }

  return (
    <div className="mt-8 flex items-center justify-center">
      <button
        onClick={togglePopup}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
      >
        Contact Us
      </button>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/3">
            <button
              className="absolute top-0 right-0 bg-white border border-gray-300 px-1 hover:bg-gray-300 hover:cursor-pointer"
              onClick={togglePopup}
            >
              X
            </button>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <select
                title="profession"
                name="profession"
                // placeholder="profession"
                defaultValue="Profession"
                className="w-full px-3 py-2 border border-gray-300 rounded-md invalid:text-gray-400"
                required
              >
                <option
                  disabled
                  hidden
                  value="Profession"
                  selected
                  className="text-gray-500"
                >
                  Profession
                </option>
                <option>Architect</option>
                <option>Biologist</option>
                <option>Civil Engineer</option>
                <option>Conservationist</option>
                <option>Geotechnical Engineer</option>
                <option>Landscape Architect</option>
                <option>Land Surveyor</option>
                <option>Planner</option>
                <option>Other</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="submit"
                className="w-1/2 flex justify-center mx-auto bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactUs
