import { useEffect } from 'react'

const useMapLayerManager = (mapRef, esriLayers) => {
  console.log('useMapLayerManager called')
  console.log('Selected Esri Layers', esriLayers)
  useEffect(() => {
    if (!mapRef.current) return

    const map = mapRef.current

    // Function to add a new layer to the map
    const addLayerToMap = (layer) => {
      console.log('addLayerToMap called')
      if (!map.getSource(layer.id)) {
        console.log('adding new layer to map')
        map.addSource(layer.id, {
          type: 'geojson',
          data: layer.url,
          cluster: true,
          clusterRadius: 20, // cluster two trailheads if less than 20 pixels apart
          clusterMaxZoom: 14, // display all trailheads individually from zoom 14 up
        })
        map.addLayer({
          id: layer.id,
          type: layer.type, // 'line', 'fill', 'circle', 'raster', 'vector', etc.
          source: layer.id,
          paint: layer.paint,
        })
      }
    }

    const removeLayerFromMap = (layerId) => {
      if (map.getSource(layerId)) {
        map.removeLayer(layerId)
        map.removeSource(layerId)
      }
    }

    // Function to update layers based on esriLayers state
    const updateLayers = () => {
      esriLayers.forEach((layer) => {
        if (layer) {
          addLayerToMap(layer)
        } else {
          removeLayerFromMap(layer.id)
        }
      })
    }

    // Add or update layers once the map is loaded
    if (map.isStyleLoaded()) {
      updateLayers()
    } else {
      map.once('load', updateLayers)
    }

    // Cleanup function
    return () => {
      // Check if the map is still valid
      if (mapRef.current && mapRef.current.getStyle()) {
        // Remove all layers and sources added by this hook
        esriLayers.forEach((layer) => {
          if (layer) {
            removeLayerFromMap(layer.id)
          }
        })
      }
    }
  }, [mapRef, esriLayers])
}

export default useMapLayerManager
