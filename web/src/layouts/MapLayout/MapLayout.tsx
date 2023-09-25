type MapLayoutProps = {
  children?: React.ReactNode
}

const MapLayout = ({ children }: MapLayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default MapLayout
