import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Map from 'src/components/Map'

const MapPage = () => {
  return (
    <>
      <MetaTags title="Map" description="Map page" />
      <Map />

      <h1>MapPage</h1>
      <p>
        Find me in <code>./web/src/pages/MapPage/MapPage.tsx</code>
      </p>
      <p>
        My default route is named <code>map</code>, link to me with `
        <Link to={routes.map()}>Map</Link>`
      </p>
    </>
  )
}

export default MapPage
