import React, { createContext, useReducer, useContext } from 'react'
import { MapState, BaseLayer, OverlayLayer } from './mapTypes'

const initialState: MapState = {
  baseLayer: {
    id: 'satellite',
    name: 'Satellite',
    url: 'https://api.maptiler.com/maps/satellite/style.json?key=Rjt57FTtlzmwKYcAVojy',
  },
  overlayLayers: [] as OverlayLayer[],
  drawingData: null,
  flyoutContent: null,
}

type Action =
  | { type: 'SET_BASE_LAYER'; payload: BaseLayer }
  | { type: 'ADD_OVERLAY_LAYER'; payload: OverlayLayer }
  | { type: 'REMOVE_OVERLAY_LAYER'; payload: OverlayLayer }
  | { type: 'SET_DRAWING_DATA'; payload: any }
  | { type: 'SET_FLYOUT_CONTENT'; payload: string | null }

const MapStateContext = createContext<MapState | undefined>(undefined)
const MapDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
)

const mapReducer = (state: MapState, action: Action): MapState => {
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

interface MapProviderProps {
  children: React.ReactNode
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, {
    baseLayer: {
      id: 'satellite',
      name: 'Satellite',
      url: 'https://api.maptiler.com/maps/satellite/style.json?key=Rjt57FTtlzmwKYcAVojy',
    },
    overlayLayers: [],
    drawingData: null,
    flyoutContent: null,
  })

  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  )
}

export const useMapState = (): MapState => {
  const context = useContext(MapStateContext)
  if (context === undefined) {
    throw new Error('useMapState must be used within a MapProvider')
  }
  return context
}

export const useMapDispatch = (): React.Dispatch<Action> => {
  const context = useContext(MapDispatchContext)
  if (context === undefined) {
    throw new Error('useMapDispatch must be used within a MapProvider')
  }
  return context
}

export const useMap = (): {
  state: MapState
  dispatch: React.Dispatch<Action>
} => {
  const state = useMapState()
  const dispatch = useMapDispatch()

  return { state, dispatch }
}
