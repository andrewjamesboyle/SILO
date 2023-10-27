const Flyout = ({ onClose, title, children }) => {
  console.log('flyout rendered')
  console.log('flyout title', title)
  return (
    <div>
      <h2 className="text-xl font-semibold leading-6 text-gray-900">{title}</h2>
      {children}
      <button
        onClick={onClose}
        className="p-2 mt-2 bg-blue-500 rounded-md text-white text-sm leading-6 font-semibold hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  )
}

export default Flyout
