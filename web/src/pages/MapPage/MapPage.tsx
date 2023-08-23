import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Map from 'src/components/Map'

const MapPage = () => {
  return (
    <>
      <MetaTags title="Map" description="Map page" />
      <Map />
    </>
  )
}

export default MapPage
