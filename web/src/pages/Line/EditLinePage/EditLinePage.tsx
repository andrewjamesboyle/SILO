import EditLineCell from 'src/components/Line/EditLineCell'

type LinePageProps = {
  id: number
}

const EditLinePage = ({ id }: LinePageProps) => {
  return <EditLineCell id={id} />
}

export default EditLinePage
