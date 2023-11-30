import React, { RefObject, useEffect } from 'react'
import MapBoxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import { useMapDispatch } from 'src/context/MapContext'

// Needed to do some weird stuff to get this to work
MapBoxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl'
MapBoxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-'
MapBoxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group'

interface DrawFeatureProps {
  mapRef: RefObject<maplibregl.Map>
}

const DrawFeature: React.FC<DrawFeatureProps> = ({ mapRef }) => {
  const dispatch = useMapDispatch()

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current
      const draw = new MapBoxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          line: true,
          point: true,
          trash: true,
        },
      })
      map.addControl(draw, 'top-right')

      // Event listener for drawing creation
      map.on('draw.create', (e) => {
        const data = draw.getAll()
        if (data.features.length > 0) {
          dispatch({ type: 'SET_DRAWING_DATA', payload: data.features[0] })
          dispatch({ type: 'SET_FLYOUT_CONTENT', payload: 'Point' })
        }
      })
      // Cleanup
      return () => {
        map.removeControl(draw)
      }
    }
  }, [mapRef, dispatch])

  // when a user clicks a draw tool, conditionally render the appropriate flyout component
  return null
}

export default DrawFeature
