import React, { useRef, useEffect } from 'react'
import maplibre from 'maplibre-gl'

import { useMap } from 'src/context/MapContext'

const MapComponent: React.FC = () => {
  const { state } = useMap()
  console.log('Layer state in Map', state.layers)
  const mapContainerRef = useRef(null)

  useEffect(() => {
    const map = new maplibre.Map({
      container: mapContainerRef.current,
      style:
        'https://api.maptiler.com/maps/satellite/style.json?key=Rjt57FTtlzmwKYcAVojy',
      center: [0, 0],
      zoom: 2,
    })

    // Cleanup on component unmount
    return () => map.remove()
  }, [])
  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />
    // <MapContainer
    //   style={{ height: '100vh', width: '100%' }}
    //   center={state.mapCenter}
    //   zoom={13}
    //   zoomControl={false}
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   />
    //   <ZoomControl position="bottomright" />
    //   {state.layers.includes('Google Hybrid') && (
    //     <TileLayer
    //       url="https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       maxZoom={20}
    //       subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
    //     />
    //   )}
    //   {state.layers.includes('Google Satellite') && (
    //     <TileLayer
    //       url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       maxZoom={20}
    //       subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
    //     />
    //   )}
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    //   {/* <DrawFeature /> */}
    //   {/* <SearchDataComponent /> */}
    // </MapContainer>
  )
}

export default MapComponent
