import type { EditLayerById, UpdateLayerInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LayerForm from 'src/components/Layer/LayerForm'

export const QUERY = gql`
  query EditLayerById($id: Int!) {
    layer: layer(id: $id) {
      id
      name
      projectId
      type
      createdById
    }
  }
`
const UPDATE_LAYER_MUTATION = gql`
  mutation UpdateLayerMutation($id: Int!, $input: UpdateLayerInput!) {
    updateLayer(id: $id, input: $input) {
      id
      name
      projectId
      type
      createdById
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ layer }: CellSuccessProps<EditLayerById>) => {
  const [updateLayer, { loading, error }] = useMutation(UPDATE_LAYER_MUTATION, {
    onCompleted: () => {
      toast.success('Layer updated')
      navigate(routes.layers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateLayerInput,
    id: EditLayerById['layer']['id']
  ) => {
    updateLayer({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Layer {layer?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LayerForm
          layer={layer}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
