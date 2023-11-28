import type { FindPolygons } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Polygons from 'src/components/Polygon/Polygons'

export const QUERY = gql`
  query FindPolygons {
    polygons {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No polygons yet. '}
      <Link to={routes.newPolygon()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ polygons }: CellSuccessProps<FindPolygons>) => {
  return <Polygons polygons={polygons} />
}
