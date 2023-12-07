import { useEffect } from 'react'
import MapBoxDraw from '@mapbox/mapbox-gl-draw'

const useMapDrawManager = (mapRef, dispatch) => {
  useEffect(() => {
    if (!mapRef.current) return

    const map = mapRef.current
    const draw = new MapBoxDraw({
      displayControlsDefault: true,
    })

    // Add drawing controls to the map
    map.on('load', () => {
      map.addControl(draw, 'top-right')
    })

    // Event listener for drawing creation
    const handleDrawCreate = (e) => {
      const data = draw.getAll()
      if (data.features.length > 0) {
        const feature = data.features[0]
        const featureType = feature.geometry.type
        const featureData = feature.geometry.coordinates
        let coordinates, flyoutContent

        // Handle different feature types
        switch (featureType) {
          case 'Point':
            coordinates = featureData
            flyoutContent = 'Point'
            break
          case 'LineString':
            coordinates = featureData
            flyoutContent = 'LineString'
            break
          case 'Polygon':
            coordinates = featureData
            flyoutContent = 'Polygon'
            break
          default:
            console.log('Unsupported feature type:', featureType)
            return // Exit if the feature type is not supported
        }

        // Dispatch actions based on the drawn feature
        dispatch({ type: 'SET_DRAWING_DATA', payload: coordinates })
        dispatch({ type: 'SET_FLYOUT_CONTENT', payload: flyoutContent })
      }
    }

    map.on('draw.create', handleDrawCreate)

    // Cleanup
    return () => {
      // Check if the map instance is still valid
      if (map && map.getStyle()) {
        // First remove the event listener
        map.off('draw.create', handleDrawCreate)

        // Then remove the control
        map.removeControl(draw)
      }
    }
  }, [mapRef, dispatch])
}

export default useMapDrawManager
