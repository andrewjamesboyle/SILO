import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Layer/LayersCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteLayerMutationVariables, FindLayers } from 'types/graphql'

const DELETE_LAYER_MUTATION = gql`
  mutation DeleteLayerMutation($id: Int!) {
    deleteLayer(id: $id) {
      id
    }
  }
`

const LayersList = ({ layers }: FindLayers) => {
  const [deleteLayer] = useMutation(DELETE_LAYER_MUTATION, {
    onCompleted: () => {
      toast.success('Layer deleted')
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

  const onDeleteClick = (id: DeleteLayerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete layer ' + id + '?')) {
      deleteLayer({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Project id</th>
            <th>Type</th>
            <th>Created by id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {layers.map((layer) => (
            <tr key={layer.id}>
              <td>{truncate(layer.id)}</td>
              <td>{truncate(layer.name)}</td>
              <td>{truncate(layer.projectId)}</td>
              <td>{truncate(layer.type)}</td>
              <td>{truncate(layer.createdById)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.layer({ id: layer.id })}
                    title={'Show layer ' + layer.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLayer({ id: layer.id })}
                    title={'Edit layer ' + layer.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete layer ' + layer.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(layer.id)}
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

export default LayersList
