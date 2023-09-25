import React, { createContext, useReducer, useContext } from 'react'

interface State {
  layers: string[]
  mapCenter?: [number, number]
}

type Action =
  | { type: 'TOGGLE_LAYER'; payload: string }
  | { type: 'SET_MAP_CENTER'; payload: [number, number] }

const MapStateContext = createContext<State | undefined>(undefined)
const MapDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
)

const mapReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_LAYER':
      const layerIndex = state.layers.indexOf(action.payload)
      const newLayers = [...state.layers]
      if (layerIndex >= 0) {
        newLayers.splice(layerIndex, 1)
      } else {
        newLayers.push(action.payload)
      }
      return { ...state, layers: newLayers }
    case 'SET_MAP_CENTER':
      return { ...state, mapCenter: action.payload }
    default:
      throw new Error(`Unhandled action type`)
  }
}

interface MapProviderProps {
  children: React.ReactNode
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, {
    layers: ['Google Hybrid'],
    mapCenter: [47.1941, -122.7633], // Set the initial state of the map to the center of Tacoma
  })

  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  )
}

export const useMapState = (): State => {
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
  state: State
  dispatch: React.Dispatch<Action>
} => {
  const state = useMapState()
  const dispatch = useMapDispatch()

  return { state, dispatch }
}
