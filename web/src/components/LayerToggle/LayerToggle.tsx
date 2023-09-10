import { useMapDispatch } from 'src/context/MapContext'

const LayerToggle = () => {
  const dispatch = useMapDispatch()

  const handleToggle = (layerName: string) => {
    dispatch({ type: 'TOGGLE_LAYER', payload: layerName })
    console.log('dispatched toggle layer', layerName)
  }

  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => handleToggle('googleHybrid')} />
        Google Hybrid
      </label>
      // TO DO: add additional checkboxes for the other layers
    </div>
  )
}

export default LayerToggle
