import React, { useEffect } from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import { useMap } from 'src/context/MapContext'
import DrawFeature from '../DrawFeature/DrawFeature'

const MapComponent: React.FC = () => {
  const { state } = useMap()
  console.log('Layer state in Map', state.layers)
  return (
    <MapContainer
      style={{ height: '85vh', width: '100%' }}
      center={state.mapCenter}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {state.layers.includes('Google Hybrid') && (
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
      )}
      {state.layers.includes('Google Satellite') && (
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />
      )}
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
