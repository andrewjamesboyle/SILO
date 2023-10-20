const Flyout = ({ onClose, title, children }) => {
  console.log('flyout rendered')
  console.log('flyout title', title)
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Flyout
