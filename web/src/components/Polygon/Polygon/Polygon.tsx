import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type {
  DeletePolygonMutationVariables,
  FindPolygonById,
} from 'types/graphql'

const DELETE_POLYGON_MUTATION = gql`
  mutation DeletePolygonMutation($id: Int!) {
    deletePolygon(id: $id) {
      id
    }
  }
`

interface Props {
  polygon: NonNullable<FindPolygonById['polygon']>
}

const Polygon = ({ polygon }: Props) => {
  const [deletePolygon] = useMutation(DELETE_POLYGON_MUTATION, {
    onCompleted: () => {
      toast.success('Polygon deleted')
      navigate(routes.polygons())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePolygonMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete polygon ' + id + '?')) {
      deletePolygon({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Polygon {polygon.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{polygon.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{polygon.type}</td>
            </tr>
            <tr>
              <th>In prj</th>
              <td>{polygon.in_prj}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{polygon.notes}</td>
            </tr>
            <tr>
              <th>Geometry</th>
              <td>{polygon.geometry}</td>
            </tr>
            <tr>
              <th>Layer id</th>
              <td>{polygon.layerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPolygon({ id: polygon.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(polygon.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Polygon
