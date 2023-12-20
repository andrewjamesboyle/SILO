import React, { createContext, useReducer, useContext } from 'react'
import { MapState } from './mapTypes'
import { mapReducer, initialState, Action } from './MapReducer'

const MapStateContext = createContext<MapState | undefined>(undefined)
const MapDispatchContext = createContext<React.Dispatch<Action> | undefined>(
  undefined
)

interface MapProviderProps {
  children: React.ReactNode
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mapReducer, initialState)

  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  )
}

// custom hook useMapState for components that only need state
export const useMapState = (): MapState => {
  const context = useContext(MapStateContext)
  if (context === undefined) {
    throw new Error('useMapState must be used within a MapProvider')
  }
  return context
}

// custom hook useMapDispatch for components that only need dispatch
export const useMapDispatch = (): React.Dispatch<Action> => {
  const context = useContext(MapDispatchContext)
  if (context === undefined) {
    throw new Error('useMapDispatch must be used within a MapProvider')
  }
  return context
}

// custom hook for components that use both state and dispatch
export const useMap = (): {
  state: MapState
  dispatch: React.Dispatch<Action>
} => {
  const state = useMapState()
  const dispatch = useMapDispatch()

  return { state, dispatch }
}
