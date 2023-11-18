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
  // {
  //   id: 'erosion_hazard',
  //   name: 'Erosion Hazard',
  //   url: 'https://services2.arcgis.com/1UvBaQ5y1ubjUPmd/ArcGIS/rest/services/Erosion_Hazard_Areas/FeatureServer/0/',
  //   sourceLayer: '0',
  //   type: 'fill',
  //   paint: {
  //     'fill-color': 'red',
  //     'fill-opacity': 0.7,
  //     'fill-outline-color': 'rgba(255, 0, 0, 0.7)',
  //   },
  //   layout: {
  //     visibility: 'visible',
  //   },
  // },
  {
    id: 'erosion_hazard',
    name: 'Erosion Hazard',
    url: 'https://services2.arcgis.com/1UvBaQ5y1ubjUPmd/ArcGIS/rest/services/Erosion_Hazard_Areas/FeatureServer/0/',
    // sourceLayer: 'Erosion_Hazard_Areas', // Update this to the correct source layer name
    sourceLayer: 'Potential_Flood_Hazard_Review', // Update this to the correct source layer name
    type: 'fill',
    paint: {
      'fill-color': 'red',
      'fill-opacity': 0.7,
      'fill-outline-color': 'rgba(255, 0, 0, 0.7)',
    },
    layout: {
      visibility: 'visible',
    },
  },

  {
    id: 'county_flood',
    name: 'County Flood',
    url: 'https://services2.arcgis.com/1UvBaQ5y1ubjUPmd/ArcGIS/rest/services/Potential_Flood_Hazard_Review/FeatureServer/0/',
    sourceLayer: '0',
    type: 'fill',
    paint: {
      'fill-color': 'blue',
      'fill-opacity': 0.7,
    },
    layout: {
      visibility: 'visible',
    },
  },
  {
    id: 'centrelines',
    name: 'Centrelines',
    url: 'https://services2.arcgis.com/1UvBaQ5y1ubjUPmd/ArcGIS/rest/services/Hydro_Centerlines/FeatureServer/0/',
    sourceLayer: '0',
  },
  // erosion_hazard
  // county_flood
  // centrelines
  // waterbodies
  // riverbanks
  // landslide_hazard
  // county_soil
  // county_wetlands
  // county_plss
  // property_address
  // property_tax_parcels
  // sewer_lift_stations
  // sewer_manholes
  // sewer_mainlines
  // sewer_nodes
  // sewer_misc
  // storm_drainage_endpoints
  // storm_drainage_access_lids
  // storm_drainage_mainlines
  // storm_drainage_network_structures
  // storm_drainage_open_channels
  // storm_drainage_outlet_components
  // storm_drainage_structures
  // stormwater_channels
  // stormwater_mainlines
  // stormwater_manholes
  // stormwater_nodes
  // property_buildings
  // polJuris
  // lomrs
  // lomas
  // profBase
  // waterLines
  // crSections
  // firmPanels
  // baseFloodElev
  // levees
  // subInfo
  // coastTrans
  // transBase
  // genStruc
  // riverMileMark
  // waterAreas
  // plss
  // modWave
  // floodHazBound
  // floodHazZone
  // priFrontDunes
  // baseIndex
  // topoLowConfAreas
  // datConvPoints
  // coastGages
  // gages
  // nodes
  // highWaterMark
  // staStrPoints
  // hydroReaches
  // alluvFans
  // subBasins
  // blm_state
  // township_plss
  // section_plss
  // intersected_plss
]
