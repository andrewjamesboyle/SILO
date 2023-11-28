import LayerCell from 'src/components/Layer/LayerCell'

type LayerPageProps = {
  id: number
}

const LayerPage = ({ id }: LayerPageProps) => {
  return <LayerCell id={id} />
}

export default LayerPage
