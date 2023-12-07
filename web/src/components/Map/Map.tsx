import React, { useRef, useEffect, useState } from 'react'
import maplibre from 'maplibre-gl'
import MapBoxDraw from '@mapbox/mapbox-gl-draw'
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'

import { useMap, useMapDispatch } from 'src/context/MapContext'

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
    console.log('map component useEffect begin')

    const map = new maplibre.Map({
      container: mapContainerRef.current,
      style: state.baseLayer.url,
      center: [-122.4443, 47.2529], // Tacoma, WA
      zoom: 10,
    })

    mapRef.current = map

    const draw = new MapBoxDraw({
      displayControlsDefault: true,
    })

    // Add drawing controls after map loads
    map.on('load', () => {
      map.addControl(draw, 'top-right')
    })

    // Event listener for drawing creation
    map.on('draw.create', (e) => {
      const data = draw.getAll()
      if (data.features.length > 0) {
        const featureType = data.features[0].geometry.type
        const featureData = data.features[0].geometry.coordinates
        let coordinates, flyoutContent
        console.log('featureType: ', featureType)
        console.log('featureData: ', featureData)

        switch (featureType) {
          case 'Point':
            coordinates = featureData
            flyoutContent = 'Point'
            console.log('coordinates: ', coordinates)
            break
          case 'LineString':
            coordinates = featureData
            flyoutContent = 'LineString'
            break
          case 'Polygon':
            coordinates = featureData
            flyoutContent = 'Polygon'
            break
          default:
            console.log('Unsupported feature type:', featureType)
            return // Exit if the feature type is not supported
        }
        dispatch({
          type: 'SET_DRAWING_DATA',
          payload: coordinates,
        })
        dispatch({ type: 'SET_FLYOUT_CONTENT', payload: flyoutContent })
      }
    })

    // Cleanup on component unmount
    return () => map.remove()
  }, [dispatch])

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }}></div>
  )
}

export default MapComponent
