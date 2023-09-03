import React, { createContext, useReducer, useContext } from 'react'

interface State {
  searchQuery: string
  aoi: string
  layers: string[]
}

type Action =
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_AOI'; payload: string }
  | { type: 'TOGGLE_LAYER'; payload: string }

const MapStateContext = createContext<State | undefined>(undefined)
const MapDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
)

const mapReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload }
    case 'SET_AOI':
      return { ...state, aoi: action.payload }
    case 'TOGGLE_LAYER':
      const layerIndex = state.layers.indexOf(action.payload)
      const newLayers = [...state.layers]
      if (layerIndex >= 0) {
        newLayers.splice(layerIndex, 1)
      } else {
        newLayers.push(action.payload)
      }
      return { ...state, layers: newLayers }
    default:
      throw new Error(`Unhandled action type`)
  }
}

export const MapProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, {
    searchQuery: '',
    aoi: '',
    layers: [],
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
