import type { FindPoints } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PointsList from '../Points/Points'

export const QUERY = gql`
  query FindPoints {
    points {
      id
      type
      inPrj
      notes
      geom
      layer
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No points yet. '}
      {/* <Link to={routes.newPoint()} className="rw-link">
        {'Create one?'}
      </Link> */}
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ points }: CellSuccessProps<FindPoints>) => {
  return <PointsList points={points} />
}
