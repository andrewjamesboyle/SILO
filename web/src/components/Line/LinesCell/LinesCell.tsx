import type { FindLines } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Lines from 'src/components/Line/Lines'

export const QUERY = gql`
  query FindLines {
    lines {
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
      {'No lines yet. '}
      <Link to={routes.newLine()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ lines }: CellSuccessProps<FindLines>) => {
  return <Lines lines={lines} />
}
