import type { FindLineById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Line from 'src/components/Line/Line'

export const QUERY = gql`
  query FindLineById($id: Int!) {
    line: line(id: $id) {
      id
      type
      in_prj
      notes
      geometry
      layerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Line not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ line }: CellSuccessProps<FindLineById>) => {
  return <Line line={line} />
}
