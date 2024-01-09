import type { FindPolygonById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Polygon from 'src/components/Polygon/Polygon'

export const QUERY = gql`
  query FindPolygonById($id: Int!) {
    polygon: polygon(id: $id) {
      id
      type
      description
      project
      layerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Polygon not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ polygon }: CellSuccessProps<FindPolygonById>) => {
  return <Polygon polygon={polygon} />
}
