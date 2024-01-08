import React, { useRef, useEffect } from 'react'
import maplibre from 'maplibre-gl'
import MapBoxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

import { useMap, useMapDispatch } from 'src/context/MapContext'
import useMapDrawManager from 'src/hooks/useMapDrawManager'
import useMapLayerManager from 'src/hooks/useMapLayerManager'

// Needed to do some weird stuff to get this to work
MapBoxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl'
MapBoxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-'
MapBoxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group'

const MapComponent: React.FC = () => {
  const { state } = useMap()
  const dispatch = useMapDispatch()
  const mapContainerRef = useRef(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    // Initialize map when component mounts

    const map = new maplibre.Map({
      container: mapContainerRef.current,
      style: state.baseLayer.url,
      center: [-122.4443, 47.2529], // Tacoma, WA
      zoom: 10,
    })

    // Assign map to ref.current to persist the map object through component re-renders
    mapRef.current = map

    // Cleanup on component unmount
    return () => map.remove()
  }, [])

  useEffect(() => {
    mapRef.current.setStyle(state.baseLayer.url)

    // Wait for style load, then re-invoke layer manager hook
    mapRef.current.on('style.load', () => {
      console.log('Map style loaded')
    })
  }, [state.baseLayer.url])

  // Custom Hooks for managing user interaction with the map
  useMapDrawManager(mapRef, dispatch)
  useMapLayerManager(mapRef, state.esriLayers)

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }}></div>
  )
}

export default MapComponent
