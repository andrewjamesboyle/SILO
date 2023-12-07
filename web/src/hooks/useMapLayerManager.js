import { useEffect } from 'react'

const useMapLayerManager = (mapRef, esriLayers) => {
  console.log('useMapLayerManager called')
  useEffect(() => {
    if (!mapRef.current) return

    const map = mapRef.current

    // Function to add a new layer to the map
    const addLayerToMap = (layer) => {
      console.log('addLayerToMap called with layer', layer)
      if (!map.getSource(layer.id)) {
        map.addSource(layer.id, {
          type: 'geojson',
          data: layer.url,
        })
        map.addLayer({
          id: layer.id,
          type: layer.type, // or 'line', 'circle', 'raster', 'vector'
          source: layer.id,
          paint: layer.paint,
        })
      }
    }
    // Update map layers based on esriLayers state
    esriLayers.forEach((layer) => {
      if (layer) {
        addLayerToMap(layer)
      } else {
        removeLayerFromMap(layer.id)
      }
    })
  }, [mapRef, esriLayers])
}

export default useMapLayerManager
