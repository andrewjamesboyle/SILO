import { Toaster } from '@redwoodjs/web/toast'
import { useState } from 'react'
import Flyout from 'src/components/Flyout/Flyout'
import Header from 'src/components/Header/Header'
import LayerToggle from 'src/components/LayerToggle/LayerToggle'

import NewPoint from 'src/components/Point/NewPoint/NewPoint'
import ProcessDataComponent from 'src/components/ProcessData/ProcessData'
import SearchDataComponent from 'src/components/SearchData/SearchData'
import Sidebar from 'src/components/Sidebar/Sidebar'
import { MapProvider, useMap } from 'src/context/MapContext'

type MapLayoutProps = {
  children?: React.ReactNode
}

const flyoutComponents = {
  Search: SearchDataComponent,
  Project: ProcessDataComponent,
  Layers: LayerToggle,
  Point: NewPoint,
}

const MapLayout = ({ children }: MapLayoutProps) => {
  const { state, dispatch } = useMap()
  const flyoutContent = state.flyoutContent
  const FlyoutComponent = flyoutContent ? flyoutComponents[flyoutContent] : null

  const closeFlyout = () =>
    dispatch({ type: 'SET_FLYOUT_CONTENT', payload: null })

  const onItemSelect = (item: string) => {
    dispatch({ type: 'SET_FLYOUT_CONTENT', payload: item })
  }

  return (
    <div>
      <Sidebar onItemSelect={onItemSelect} />

      <main className="lg:pl-48 relative">
        <div>{children}</div>
        {FlyoutComponent && (
          <div className="absolute z-50 lg:pl-48 top-0 left-0 w-half h-half m-3.5 bottom-0">
            <div className="bg-white p-3.5 rounded-2xl">
              <Flyout onClose={closeFlyout} title={flyoutContent}>
                <FlyoutComponent />
              </Flyout>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default MapLayout
