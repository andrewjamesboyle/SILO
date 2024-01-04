import PointsCell from 'src/components/Point/PointsCell'

type PointPageProps = {
  id: number
}

const PointPage = ({ id }: PointPageProps) => {
  return <PointsCell id={id} />
}

export default PointPage
