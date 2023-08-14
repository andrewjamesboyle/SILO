import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import DrawFeature from '../DrawFeature/DrawFeature'

const MapComponent: React.FC = () => {
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
