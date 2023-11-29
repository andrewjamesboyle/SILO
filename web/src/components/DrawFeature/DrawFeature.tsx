import React, { RefObject, useEffect } from 'react'
import MapBoxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

// Needed to do some weird stuff to get this to work
MapBoxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl'
MapBoxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-'
MapBoxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group'

interface DrawFeatureProps {
  mapRef: RefObject<maplibregl.Map>
}
const DrawFeature: React.FC<DrawFeatureProps> = ({ mapRef }) => {
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
    }
  }, [mapRef])

  return null
}

export default DrawFeature
