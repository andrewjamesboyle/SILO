//  import React, { useState } from 'react'
//  import './ContactUs.css'

//  const ContactUs = () => {
//    const [isPopupVisible, setPopupVisible] = useState(false)
//   const [profession, setProfession] = useState('')
//   const [otherProfession, setOtherProfession] = useState('')

//   const togglePopup = () => {
//     setPopupVisible(!isPopupVisible)
//   }

//   const handleProfessionChange = (event) => {
//     const selectedProfession = event.target.value
//     setProfession(selectedProfession)

//     // Reset the other profession field if "Other" is not selected
//     if (selectedProfession !== 'Other') {
//       setOtherProfession('')
//     }
//   }

//   const handleOtherProfessionChange = (event) => {
//     setOtherProfession(event.target.value)
//   }

//   return (
//     <div className="mt-8 flex items-center justify-center">
//       <button
//         onClick={togglePopup}
//         className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
//       >
//         Contact Us
//       </button>

//       {isPopupVisible && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white p-10 rounded-lg shadow-lg relative w-1/3 text-gray-700">
//             <button
//               type="button"
//               className="absolute top-1 text-gray-500 p-1 right-1 rounded-md py-1.5 px-1.5 bg-white hover:text-gray-800 hover:scale-105 hover:cursor-pointer"
//               onClick={togglePopup}
//             >
//               &#x2715;
//             </button>
//             <form className="space-y-4 text-gray-700 placeholder-gray-400">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
//                 required
//               />
//               <select
//                 title="profession"
//                 name="profession"
//                 value={profession}
//                 // defaultValue="Profession"
//                 onChange={handleProfessionChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200 placeholder-gray-400"
//                 required
//               >
//                 <option
//                   disabled
//                   // hidden
//                   value=""
//                   // selected
//                   className="text-placeholder"
//                 >
//                   Profession
//                 </option>
//                 <option>Architect</option>
//                 <option>Biologist</option>
//                 <option>Civil Engineer</option>
//                 <option>Conservationist</option>
//                 <option>Geotechnical Engineer</option>
//                 <option>Landscape Architect</option>
//                 <option>Land Surveyor</option>
//                 <option>Planner</option>
//                 <option>Septic Designer</option>
//                 <option>Other</option>
//               </select>

//               {profession === 'Other' && (
//                 <input
//                   type="text"
//                   placeholder="Your Profession"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
//                   value={otherProfession}
//                   onChange={handleOtherProfessionChange}
//                   required
//                 />
//               )}

//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
//                 required
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
//                 required
//               />
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
//                 required
//               />
//               <textarea
//                 cols={30}
//                 rows={10}
//                 // type="text"
//                 placeholder="Description"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200 mb-6"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-1/2 mt-6 flex justify-center mx-auto bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default ContactUs

import React, { useState } from 'react'
import './ContactUs.css' // Import the custom CSS file

const ContactUs = () => {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [profession, setProfession] = useState('')
  const [otherProfession, setOtherProfession] = useState('')

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible)
  }

  const handleProfessionChange = (event) => {
    const selectedProfession = event.target.value
    setProfession(selectedProfession)

    if (selectedProfession !== 'Other') {
      setOtherProfession('')
    }
  }

  const handleOtherProfessionChange = (event) => {
    setOtherProfession(event.target.value)
  }

  return (
    <div className="mt-8 flex items-center justify-center">
      <button
        onClick={togglePopup}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
      >
        Contact Us
      </button>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg relative w-1/3 text-gray-700">
            <button
              type="button"
              className="absolute top-1 text-gray-500 p-1 right-1 rounded-md py-1.5 px-1.5 bg-white hover:text-gray-800 hover:scale-105 hover:cursor-pointer"
              onClick={togglePopup}
            >
              &#x2715;
            </button>
            <form className="space-y-4 text-gray-700">
              {/* ... other input fields ... */}
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
                required
              />
              <select
                title="profession"
                name="profession"
                value={profession}
                onChange={handleProfessionChange}
                className="w-full text-gray-400 px-3 py-2 border border-gray-300 rounded-md bg-gray-200 appearance-none"
                required
              >
                <option value="" disabled className="text-placeholder">
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
                <option>Septic Designer</option>
                <option>Other</option>
              </select>
              {profession === 'Other' && (
                <input
                  type="text"
                  placeholder="Your Profession"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
                  value={otherProfession}
                  onChange={handleOtherProfessionChange}
                  required
                />
              )}

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200"
                required
              />
              <textarea
                cols={30}
                rows={10}
                placeholder="Description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-200 mb-6"
                required
              />
              <button
                type="submit"
                className="w-1/2 mt-6 flex justify-center mx-auto bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
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
