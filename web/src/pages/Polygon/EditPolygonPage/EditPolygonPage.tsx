import EditPolygonCell from 'src/components/Polygon/EditPolygonCell'

type PolygonPageProps = {
  id: number
}

const EditPolygonPage = ({ id }: PolygonPageProps) => {
  return <EditPolygonCell id={id} />
}

export default EditPolygonPage
