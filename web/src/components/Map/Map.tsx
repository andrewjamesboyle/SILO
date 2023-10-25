import React, { useRef, useEffect } from 'react'
import maplibre from 'maplibre-gl'

import { useMap } from 'src/context/MapContext'

const MapComponent: React.FC = () => {
  const { state } = useMap()
  console.log('Layer state in Map', state.baseLayer)
  const mapContainerRef = useRef(null)
  const mapRef = useRef<InstanceType<(typeof maplibre)['Map']> | null>(null)

  useEffect(() => {
    const map = new maplibre.Map({
      container: mapContainerRef.current,
      style: state.baseLayer.url,
      center: [0, 0],
      zoom: 2,
    })

    mapRef.current = map
    // Cleanup on component unmount
    return () => map.remove()
  }, [])

  useEffect(() => {
    if (mapRef.current) {
      ;(mapRef.current as any).setStyle(state.baseLayer.url)
    }
  }, [state.baseLayer])

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />
  )
}

export default MapComponent
