import React, { useEffect } from 'react'

import L from 'leaflet'
import 'leaflet-draw'
import { useMap } from 'react-leaflet'

const DrawFeature: React.FC = () => {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const drawControl = new L.Control.Draw({
      draw: {
        polyline: {
          shapeOptions: {
            color: '#f357a1',
            weight: 10,
          },
        },
        polygon: {
          allowIntersection: false, // Restricts shapes to simple polygons
          drawError: {
            color: '#e1e100', // Color the shape will turn when intersects
            message: "<strong>Oh snap!<strong> you can't draw that!", // Message that will show when intersect
          },
          shapeOptions: {
            color: '#bada55',
          },
        },
        circle: false,
        marker: false,
      },
    })
    map.addControl(drawControl)

    return () => {
      map.removeControl(drawControl)
    }
  }, [map])

  return null
}

export default DrawFeature
