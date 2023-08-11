import React, { useEffect, useRef } from 'react'

import L from 'leaflet'
import 'leaflet-draw'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'

const MapComponent: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null)

  const DrawFeature = () => {
    const map = useMap()

    useEffect(() => {
      if (!map) return

      mapRef.current = map
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
  return (
    <MapContainer
      style={{ height: '100vh', width: '100%' }}
      center={[47.1941, -122.7633]}
      zoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <DrawFeature />
    </MapContainer>
  )
}

export default MapComponent
