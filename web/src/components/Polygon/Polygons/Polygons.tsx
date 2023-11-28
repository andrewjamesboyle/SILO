import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Polygon/PolygonsCell'
import { truncate } from 'src/lib/formatters'

import type {
  DeletePolygonMutationVariables,
  FindPolygons,
} from 'types/graphql'

const DELETE_POLYGON_MUTATION = gql`
  mutation DeletePolygonMutation($id: Int!) {
    deletePolygon(id: $id) {
      id
    }
  }
`

const PolygonsList = ({ polygons }: FindPolygons) => {
  const [deletePolygon] = useMutation(DELETE_POLYGON_MUTATION, {
    onCompleted: () => {
      toast.success('Polygon deleted')
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

  const onDeleteClick = (id: DeletePolygonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete polygon ' + id + '?')) {
      deletePolygon({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>In prj</th>
            <th>Notes</th>
            <th>Geometry</th>
            <th>Layer id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {polygons.map((polygon) => (
            <tr key={polygon.id}>
              <td>{truncate(polygon.id)}</td>
              <td>{truncate(polygon.type)}</td>
              <td>{truncate(polygon.in_prj)}</td>
              <td>{truncate(polygon.notes)}</td>
              <td>{truncate(polygon.geometry)}</td>
              <td>{truncate(polygon.layerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.polygon({ id: polygon.id })}
                    title={'Show polygon ' + polygon.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPolygon({ id: polygon.id })}
                    title={'Edit polygon ' + polygon.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete polygon ' + polygon.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(polygon.id)}
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

export default PolygonsList
