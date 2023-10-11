const Flyout = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <button onClick={onClose}>Close</button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Flyout
