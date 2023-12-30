import React, { useState, useEffect, useRef } from 'react'

const ContactUs = () => {
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })
  const buttonRef = useRef(null)
  const popupRef = useRef(null)

  const togglePopup = () => {
    if (!isPopupVisible) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      setPopupPosition({
        top: buttonRect.top + window.scrollY,
        left: buttonRect.left + window.scrollX,
      })
    }
    setPopupVisible(!isPopupVisible)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupVisible(false)
      }
    }

    const handleScroll = () => {
      setPopupVisible(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [popupRef])

  return (
    <div className="mt-8 flex items-center justify-center gap-x-6">
      <button
        ref={buttonRef}
        onClick={togglePopup}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Contact Us
      </button>

      {isPopupVisible && (
        <div
          ref={popupRef}
          style={{
            top: 'calc(`${popupPosition.top}px` - (width / 2))',
            left: 'calc(`${popupPosition.left}px` - (height / 2))',
          }}
          className="absolute bg-white p-4 rounded shadow-lg transition-opacity duration-300 ease-out opacity-100"
        >
          {/* Contact Information Goes Here */}
          <div className="text-xl">
            <h3>Contact info placeholder</h3>
            <p>phone: (831) 877- 2926</p>
            <p>email: questions@concerns.net</p>
            <p>postal mail: 2343 NE Main</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactUs
