import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeletePointMutationVariables, FindPointById } from 'types/graphql'

const DELETE_POINT_MUTATION = gql`
  mutation DeletePointMutation($id: Int!) {
    deletePoint(id: $id) {
      id
    }
  }
`

interface Props {
  point: NonNullable<FindPointById['point']>
}

const Point = ({ point }: Props) => {
  const [deletePoint] = useMutation(DELETE_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('Point deleted')
      navigate(routes.points())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePointMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete point ' + id + '?')) {
      deletePoint({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Point {point.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{point.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{point.type}</td>
            </tr>
            <tr>
              <th>In prj</th>
              <td>{point.in_prj}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{point.notes}</td>
            </tr>
            <tr>
              <th>Geometry</th>
              <td>{point.geometry}</td>
            </tr>
            <tr>
              <th>Layer id</th>
              <td>{point.layerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPoint({ id: point.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(point.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Point
