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
      'fill-color': 'red',
      'fill-opacity': 0.7,
      'fill-outline-color': 'rgb(128, 0, 0)',
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
    id: 'control points',
    name: 'Control Points',
    url: 'http://146.190.37.102:7800/public.controlpt',
    sourceLayer: 'public.controlpt',
    type: 'fill',
    paint: {
      'fill-color': 'pink',
      'fill-opacity': 0.7,
      'fill-outline-color': 'rgba(255, 192, 203, 0.7)',
    },
    layout: {
      visibility: 'visible',
    },
  },
  // {
  //   id: 'parcels',
  //   name: 'Parcels',
  //   url: 'http://146.190.37.102:7800/public.parcels',
  //   sourceLayer: 'parcels',
  //   type: 'fill',
  //   maxzoom: 22,
  //   minzoom: 13,
  //   paint: {
  //     'fill-color': 'lightblue',
  //     'fill-opacity': 0.1,
  //     'fill-outline-color': 'rgba(173, 216, 230, 0.7)',
  //   },
  //   layout: {
  //     visibility: 'visible',
  //   },
  // },
  // {
  //   id: 'soil bore',
  //   name: 'Soil Bore',
  //   url: 'http://146.190.37.102:7800/public.soilbore',
  //   sourceLayer: 'public.soilbore',
  //   type: 'fill',
  //   paint: {
  //     'fill-color': 'lightblue',
  //     'fill-opacity': 0.1,
  //     'fill-outline-color': 'rgba(173, 216, 230, 0.7)',
  //   },
  //   layout: {
  //     visibility: 'visible',
  //   },
  // },
  {
    id: 'soil bore',
    name: 'Soil Bore',
    url: 'http://146.190.37.102:7800/public.soilbore',
    sourceLayer: 'public.soilbore',
    type: 'circle',
    paint: {
      'fill-color': 'white',
      'fill-opacity': 0.8,
      'fill-outline-color': 'rgb(255, 192, 203)',
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
      'fill-color': 'brown',
      'fill-opacity': 0.9,
      'fill-outline-color': 'rgb(255, 192, 20)',
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
      'fill-color': 'brown',
      'fill-opacity': 0.9,
      'fill-outline-color': 'rgb(255, 192, 20)',
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
    type: 'fill',
    paint: {
      'fill-color': 'brown',
      'fill-opacity': 0.3,
      'fill-outline-color': 'brown',
    },
    layout: {
      visibility: 'visible',
    },
  },
]
