import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PolygonForm from 'src/components/Polygon/PolygonForm'

import type { CreatePolygonInput } from 'types/graphql'

const CREATE_POLYGON_MUTATION = gql`
  mutation CreatePolygonMutation($input: CreatePolygonInput!) {
    createPolygon(input: $input) {
      id
    }
  }
`

const NewPolygon = () => {
  const [createPolygon, { loading, error }] = useMutation(
    CREATE_POLYGON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Polygon created')
        navigate(routes.polygons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePolygonInput) => {
    createPolygon({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Polygon</h2>
      </header>
      <div className="rw-segment-main">
        <PolygonForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPolygon
