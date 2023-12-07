// This is a config file for different types of data layers
// Base Layers come from MapTiler
// ESRI Layers come from ESRI
// Overlay Layers came from Kent's API, but are no longer functional

export const baseLayers = [
  {
    id: 'street',
    name: 'Street',
    url: 'https://api.maptiler.com/maps/openstreetmap/style.json?key=Rjt57FTtlzmwKYcAVojy',
  },
  {
    id: 'satellite',
    name: 'Satellite',
    url: 'https://api.maptiler.com/maps/satellite/style.json?key=Rjt57FTtlzmwKYcAVojy',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    url: 'https://api.maptiler.com/maps/ocean/style.json?key=Rjt57FTtlzmwKYcAVojy',
  },
]

export const esriLayers = [
  {
    id: 'trailheads-circle',
    name: 'Trailheads',
    url: 'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0/query?f=pgeojson&where=1=1',
    source: 'trailheads',
    type: 'circle',
    paint: {
      'circle-color': 'hsla(0,0%,0%,0.75)',
      'circle-stroke-width': 1.5,
      'circle-stroke-color': 'white',
    },
    layout: {
      visibility: 'visible',
    },
  },
]

export const overlayLayers = [
  {
    id: 'wetlands',
    name: 'Wetlands',
    url: 'http://146.190.37.102:7800/public.wetlands',
    sourceLayer: 'public.wetlands',
    type: 'fill',
    paint: {
      'fill-color': 'green',
      'fill-opacity': 0.7,
      'fill-outline-color': 'rgba(0, 128, 0, 0.7)',
    },
    layout: {
      visibility: 'visible',
    },
  },
  {
    id: 'monuments',
    name: 'Monuments',
    url: 'http://146.190.37.102:7800/public.mons',
    sourceLayer: 'public.mons',
    type: 'circle',
    paint: {
      'circle-color': 'red',
      'circle-radius': 10,
    },
    layout: {
      visibility: 'visible',
    },
  },
  {
    id: 'test pit',
    name: 'Test Pit',
    url: 'http://146.190.37.102:7800/public.testpit',
    sourceLayer: 'public.testpit',
    type: 'circle',
    paint: {
      'circle-color': 'green',
      'circle-radius': 10,
    },
    layout: {
      visibility: 'visible',
    },
  },
  {
    id: 'control points',
    name: 'Control Points',
    url: 'http://146.190.37.102:7800/public.controlpt',
    sourceLayer: 'public.controlpt',
    type: 'circle',
    paint: {
      'circle-color': 'pink',
      'circle-radius': 10,
    },
    layout: {
      visibility: 'visible',
    },
  },
  {
    id: 'parcels',
    name: 'Parcels',
    url: 'http://146.190.37.102:7800/public.parcels',
    sourceLayer: 'public.parcels',
    type: 'fill',
    maxzoom: 22,
    minzoom: 13,
    paint: {
      'fill-color': 'lightblue',
      'fill-opacity': 0.1,
      'fill-outline-color': 'rgba(173, 216, 230, 0.7)',
    },
    layout: {
      visibility: 'visible',
    },
  },

  {
    id: 'soil bore',
    name: 'Soil Bore',
    url: 'http://146.190.37.102:7800/public.soilbore',
    sourceLayer: 'public.soilbore',
    type: 'circle',
    paint: {
      'circle-color': 'white',
      'circle-radius': 10,
    },
    layout: {
      visibility: 'visible',
    },
  },
  {
    id: 'ordinary high water',
    name: 'Ordinary High Water',
    url: 'http://146.190.37.102:7800/public.ord_high_wtr',
    sourceLayer: 'public.ord_high_wtr',
    type: 'line',
    paint: {
      'line-color': '#198EC8',
    },
    layout: {
      visibility: 'visible',
    },
  },
  {
    id: 'boundary',
    name: 'Boundary',
    url: 'http://146.190.37.102:7800/public.boundary',
    sourceLayer: 'public.boundary',
    type: 'line',
    paint: {
      'line-color': 'red',
    },
    layout: {
      visibility: 'visible',
    },
  },
]
