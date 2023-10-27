import React, { createContext, useReducer, useContext } from 'react'
import { MapState, BaseLayer, OverlayLayer } from './mapTypes'

const initialState: MapState = {
  baseLayer: {
    id: 'satellite',
    name: 'Satellite',
    url: 'https://api.maptiler.com/maps/satellite/style.json?key=Rjt57FTtlzmwKYcAVojy',
  },
  overlayLayers: [],
}

type Action =
  | { type: 'SET_BASE_LAYER'; payload: BaseLayer }
  | { type: 'TOGGLE_OVERLAY_LAYER'; payload: OverlayLayer }

const MapStateContext = createContext<MapState | undefined>(undefined)
const MapDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
)

const mapReducer = (state: MapState, action: Action): MapState => {
  switch (action.type) {
    case 'SET_BASE_LAYER':
      return { ...state, baseLayer: action.payload }
    case 'TOGGLE_OVERLAY_LAYER':
      const layerIndex = state.overlayLayers.indexOf(action.payload)
      const newLayers = [...state.overlayLayers]
      if (layerIndex >= 0) {
        newLayers.splice(layerIndex, 1)
      } else {
        newLayers.push(action.payload)
      }
      return { ...state, overlayLayers: newLayers }

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
