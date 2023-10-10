import { Toaster } from '@redwoodjs/web/toast'
import Header from 'src/components/Header/Header'

type MapLayoutProps = {
  children?: React.ReactNode
}

const MapLayout = ({ children }: MapLayoutProps) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
      <Toaster />
    </div>
  )
}

export default MapLayout
