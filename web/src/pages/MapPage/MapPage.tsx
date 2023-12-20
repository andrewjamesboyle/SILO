import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

import Map from 'src/components/Map'

const MapPage = () => {
  const { currentUser } = useAuth()
  console.log('map page currentUser', currentUser)
  return (
    <>
      <MetaTags title="Map" description="Map page" />

      <div>
        <Map />
      </div>
    </>
  )
}

export default MapPage
