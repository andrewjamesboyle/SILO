import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Point/PointsCell'
import { truncate } from 'src/lib/formatters'

import type { DeletePointMutationVariables, FindPoints } from 'types/graphql'

const DELETE_POINT_MUTATION = gql`
  mutation DeletePointMutation($id: Int!) {
    deletePoint(id: $id) {
      id
    }
  }
`

const PointsList = ({ points }: FindPoints) => {
  const [deletePoint] = useMutation(DELETE_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('Point deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePointMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete point ' + id + '?')) {
      deletePoint({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Description</th>
            <th>Project</th>
            <th>Layer id</th>
            <th>Created by id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {points.map((point) => (
            <tr key={point.id}>
              <td>{truncate(point.id)}</td>
              <td>{truncate(point.type)}</td>
              <td>{truncate(point.description)}</td>
              <td>{truncate(point.project)}</td>
              <td>{truncate(point.layerId)}</td>
              <td>{truncate(point.createdById)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.point({ id: point.id })}
                    title={'Show point ' + point.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPoint({ id: point.id })}
                    title={'Edit point ' + point.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete point ' + point.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(point.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PointsList
