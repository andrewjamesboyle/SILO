import PointCell from 'src/components/Point/PointCell'

type PointPageProps = {
  id: number
}

const PointPage = ({ id }: PointPageProps) => {
  return <PointCell id={id} />
}

export default PointPage
