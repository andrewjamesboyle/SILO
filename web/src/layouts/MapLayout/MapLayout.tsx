import { Toaster } from '@redwoodjs/web/toast'
import Header from 'src/components/Header/Header'
import Sidebar from 'src/components/Sidebar/Sidebar'

type MapLayoutProps = {
  children?: React.ReactNode
}

const MapLayout = ({ children }: MapLayoutProps) => {
  return (
    <div>
      <Sidebar />
      <main className="py-0 lg:pl-72">
        <div className="px-0">{children}</div>
      </main>
    </div>
  )
}

export default MapLayout
