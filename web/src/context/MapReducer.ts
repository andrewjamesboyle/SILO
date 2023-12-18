import { MapState, BaseLayer, OverlayLayer, EsriLayer } from './mapTypes'

export const initialState: MapState = {
  baseLayer: {
    id: 'satellite',
    name: 'Satellite',
    url: 'https://api.maptiler.com/maps/hybrid/style.json?key=Rjt57FTtlzmwKYcAVojy',
  },
  overlayLayers: [] as OverlayLayer[],
  esriLayers: [] as EsriLayer[],
  drawingData: null,
  flyoutContent: null,
}

export type Action =
  | { type: 'SET_BASE_LAYER'; payload: BaseLayer }
  | { type: 'ADD_OVERLAY_LAYER'; payload: OverlayLayer }
  | { type: 'REMOVE_OVERLAY_LAYER'; payload: OverlayLayer }
  | { type: 'ADD_ESRI_LAYER'; payload: EsriLayer }
  | { type: 'REMOVE_ESRI_LAYER'; payload: EsriLayer }
  | { type: 'SET_DRAWING_DATA'; payload: any }
  | { type: 'SET_FLYOUT_CONTENT'; payload: string | null }

export const mapReducer = (state: MapState, action: Action): MapState => {
  switch (action.type) {
    case 'SET_BASE_LAYER':
      return { ...state, baseLayer: action.payload }
    case 'ADD_OVERLAY_LAYER':
      return {
        ...state,
        overlayLayers: [...state.overlayLayers, action.payload],
      }
    case 'REMOVE_OVERLAY_LAYER':
      return {
        ...state,
        overlayLayers: state.overlayLayers.filter(
          (layer) => layer.id !== action.payload.id
        ),
      }
    case 'ADD_ESRI_LAYER':
      return {
        ...state,
        esriLayers: [...state.esriLayers, action.payload],
      }
    case 'REMOVE_ESRI_LAYER':
      return {
        ...state,
        esriLayers: state.esriLayers.filter(
          (layer) => layer.id !== action.payload.id
        ),
      }

    case 'SET_DRAWING_DATA':
      return {
        ...state,
        drawingData: action.payload,
      }
    case 'SET_FLYOUT_CONTENT':
      return {
        ...state,
        flyoutContent: action.payload,
      }
    default:
      throw new Error(`Unhandled action type`)
  }
}
