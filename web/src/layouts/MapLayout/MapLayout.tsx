import { Toaster } from '@redwoodjs/web/toast'

type MapLayoutProps = {
  children?: React.ReactNode
}

const MapLayout = ({ children }: MapLayoutProps) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">SILO</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
      <Toaster />
    </div>
  )
}

export default MapLayout
