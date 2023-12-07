import EditPointCell from 'src/components/Point/EditPointCell'

type PointPageProps = {
  id: number
}

const EditPointPage = ({ id }: PointPageProps) => {
  return <EditPointCell id={id} />
}

export default EditPointPage
