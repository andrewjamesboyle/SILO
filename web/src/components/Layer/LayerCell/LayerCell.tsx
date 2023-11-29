import type { FindLayerById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Layer from 'src/components/Layer/Layer'

export const QUERY = gql`
  query FindLayerById($id: Int!) {
    layer: layer(id: $id) {
      id
      name
      projectId
      type
      createdById
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Layer not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ layer }: CellSuccessProps<FindLayerById>) => {
  return <Layer layer={layer} />
}
