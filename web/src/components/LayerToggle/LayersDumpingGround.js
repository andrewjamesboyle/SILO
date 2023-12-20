// This file contains unused code from the original implementation of layer toggling feature

const overlayLayersRef = useRef([])

const addLayerToMap = (map, layerConfig) => {
  // Add over lay layer to map
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
  if (mapRef.current) {
    const map = mapRef.current

    const handleStyleData = () => {
      // Add overlay layers to map once base layer has loaded
      overlayLayersRef.current.forEach((layerConfig) => {
        addLayerToMap(map, layerConfig)
      })
    }

    map.on('styledata', handleStyleData)
    map.setStyle(state.baseLayer.url)

    return () => {
      // Clean up the event listener when the effect is re-run or the component is unmounted.
      map.off('styledata', handleStyleData)
    }
  }
}, [state.baseLayer])

useEffect(() => {
  if (mapRef.current) {
    overlayLayersRef.current = state.overlayLayers // store a copy of the overlay layers in a ref
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
