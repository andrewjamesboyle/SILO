import LineCell from 'src/components/Line/LineCell'

type LinePageProps = {
  id: number
}

const LinePage = ({ id }: LinePageProps) => {
  return <LineCell id={id} />
}

export default LinePage
