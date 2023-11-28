import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LayerForm from 'src/components/Layer/LayerForm'

import type { CreateLayerInput } from 'types/graphql'

const CREATE_LAYER_MUTATION = gql`
  mutation CreateLayerMutation($input: CreateLayerInput!) {
    createLayer(input: $input) {
      id
    }
  }
`

const NewLayer = () => {
  const [createLayer, { loading, error }] = useMutation(CREATE_LAYER_MUTATION, {
    onCompleted: () => {
      toast.success('Layer created')
      navigate(routes.layers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateLayerInput) => {
    createLayer({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Layer</h2>
      </header>
      <div className="rw-segment-main">
        <LayerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLayer
