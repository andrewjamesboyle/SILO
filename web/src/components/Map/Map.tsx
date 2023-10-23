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
  )
}

export default MapComponent
