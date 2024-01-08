import { MapProvider } from 'src/context/MapContext'

import MapLayout from './MapLayout'

type MapLayoutProps = {
  children?: React.ReactNode
}

const MapLayoutProvider = ({ children }: MapLayoutProps) => {
  return (
    <MapProvider>
      <MapLayout>{children}</MapLayout>
    </MapProvider>
  )
}

export default MapLayoutProvider
