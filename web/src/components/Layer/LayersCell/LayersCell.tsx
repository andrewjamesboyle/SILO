import type { FindLayers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Layers from 'src/components/Layer/Layers'

export const QUERY = gql`
  query FindLayers {
    layers {
      id
      name
      projectId
      type
      createdById
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No layers yet. '}
      <Link to={routes.newLayer()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ layers }: CellSuccessProps<FindLayers>) => {
  return <Layers layers={layers} />
}
