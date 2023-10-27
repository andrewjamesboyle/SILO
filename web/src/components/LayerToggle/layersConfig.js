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
  // ... other base layers
]

export const overlayLayers = [
  {
    id: 'wetlands',
    name: 'Wetlands',
    url: 'VECTOR_TILE_ENDPOINT_FOR_WETLANDS',
  },
  {
    id: 'monuments',
    name: 'Monuments',
    url: 'VECTOR_TILE_ENDPOINT_FOR_WETLANDS',
  },
  {
    id: 'test pit',
    name: 'Test Pit',
    url: 'VECTOR_TILE_ENDPOINT_FOR_WETLANDS',
  },
  {
    id: 'control points',
    name: 'Control Points',
    url: 'http://146.190.37.102:7800/public.controlpt/{z}/{x}/{y}.pbf',
  },
  // ... other overlay layers
]
