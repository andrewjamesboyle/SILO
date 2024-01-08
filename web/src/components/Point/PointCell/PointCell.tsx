import type { FindPointById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Point from 'src/components/Point/Point'

export const QUERY = gql`
  query FindPointById($id: Int!) {
    point: point(id: $id) {
      id
      type
      description
      project
      layerId
      createdById
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Point not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ point }: CellSuccessProps<FindPointById>) => {
  return <Point point={point} />
}
