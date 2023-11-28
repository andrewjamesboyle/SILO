import PolygonCell from 'src/components/Polygon/PolygonCell'

type PolygonPageProps = {
  id: number
}

const PolygonPage = ({ id }: PolygonPageProps) => {
  return <PolygonCell id={id} />
}

export default PolygonPage
