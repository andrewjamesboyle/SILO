import EditLayerCell from 'src/components/Layer/EditLayerCell'

type LayerPageProps = {
  id: number
}

const EditLayerPage = ({ id }: LayerPageProps) => {
  return <EditLayerCell id={id} />
}

export default EditLayerPage
