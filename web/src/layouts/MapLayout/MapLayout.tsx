import { Toaster } from '@redwoodjs/web/toast'
import { useState } from 'react'
import Flyout from 'src/components/Flyout/Flyout'
import Header from 'src/components/Header/Header'
import LayerToggle from 'src/components/LayerToggle/LayerToggle'
import ProcessDataComponent from 'src/components/ProcessData/ProcessData'
import SearchDataComponent from 'src/components/SearchData/SearchData'
import Sidebar from 'src/components/Sidebar/Sidebar'
import { MapProvider } from 'src/context/MapContext'

type MapLayoutProps = {
  children?: React.ReactNode
}

const flyoutComponents = {
  Search: SearchDataComponent,
  Project: ProcessDataComponent,
  Layers: LayerToggle,
  // ... add other components here
}

const MapLayout = ({ children }: MapLayoutProps) => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(null)
  console.log('activeSidebarItem', activeSidebarItem)
  const FlyoutComponent = activeSidebarItem
    ? flyoutComponents[activeSidebarItem]
    : null
  console.log('FlyoutComponent', FlyoutComponent)

  return (
    <div>
      <MapProvider>
        <Sidebar onItemSelect={setActiveSidebarItem} />

        <main className="lg:pl-48 relative">
          <div>{children}</div>
          {FlyoutComponent && (
            <div className="absolute z-50 lg:pl-48 top-0 left-0 w-half h-half">
              <div className="bg-white p-4 rounded-r-2xl">
                <Flyout
                  onClose={() => setActiveSidebarItem(null)}
                  title={activeSidebarItem}
                >
                  <FlyoutComponent />
                </Flyout>
              </div>
            </div>
          )}
        </main>
      </MapProvider>
    </div>
  )
}

export default MapLayout
