import React, { useRef, useEffect } from 'react'
import maplibre from 'maplibre-gl'

import { useMap } from 'src/context/MapContext'
import { overlayLayers } from '../LayerToggle/layersConfig'

const MapComponent: React.FC = () => {
  const { state } = useMap()
  const mapContainerRef = useRef(null)
  const mapRef = useRef<any>(null)

  const addLayerToMap = (map, layerConfig) => {
    console.log('adding layer to map', layerConfig.id)
    if (!map.getLayer(layerConfig.id)) {
      map.addLayer({
        id: layerConfig.id,
        type: layerConfig.type,
        source: {
          type: 'vector',
          tiles: [`${layerConfig.url}/{z}/{x}/{y}.pbf`],
        },
        'source-layer': layerConfig.sourceLayer,
        layout: layerConfig.layout || {},
        paint: layerConfig.paint || {},
      })
    }
  }

  const removeLayerFromMap = (map, layerId) => {
    if (map.getLayer(layerId)) {
      map.removeLayer(layerId)
      map.removeSource(layerId)
    }
  }

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

  useEffect(() => {
    if (mapRef.current) {
      const activeLayerIds = state.overlayLayers.map((layer) => layer.id)

      overlayLayers.forEach((layerConfig) => {
        if (activeLayerIds.includes(layerConfig.id)) {
          addLayerToMap(mapRef.current, layerConfig)
        } else {
          removeLayerFromMap(mapRef.current, layerConfig.id)
        }
      })
    }
  }, [state.overlayLayers])

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />
  )
}

export default MapComponent
