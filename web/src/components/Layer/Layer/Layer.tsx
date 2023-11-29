import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeleteLayerMutationVariables, FindLayerById } from 'types/graphql'

const DELETE_LAYER_MUTATION = gql`
  mutation DeleteLayerMutation($id: Int!) {
    deleteLayer(id: $id) {
      id
    }
  }
`

interface Props {
  layer: NonNullable<FindLayerById['layer']>
}

const Layer = ({ layer }: Props) => {
  const [deleteLayer] = useMutation(DELETE_LAYER_MUTATION, {
    onCompleted: () => {
      toast.success('Layer deleted')
      navigate(routes.layers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLayerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete layer ' + id + '?')) {
      deleteLayer({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Layer {layer.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{layer.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{layer.name}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{layer.projectId}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{layer.type}</td>
            </tr>
            <tr>
              <th>Created by id</th>
              <td>{layer.createdById}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLayer({ id: layer.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(layer.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Layer
