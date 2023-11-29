import type { EditPolygonById, UpdatePolygonInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PolygonForm from 'src/components/Polygon/PolygonForm'

export const QUERY = gql`
  query EditPolygonById($id: Int!) {
    polygon: polygon(id: $id) {
      id
      type
      in_prj
      notes
      geometry
      layerId
    }
  }
`
const UPDATE_POLYGON_MUTATION = gql`
  mutation UpdatePolygonMutation($id: Int!, $input: UpdatePolygonInput!) {
    updatePolygon(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ polygon }: CellSuccessProps<EditPolygonById>) => {
  const [updatePolygon, { loading, error }] = useMutation(
    UPDATE_POLYGON_MUTATION,
    {
      onCompleted: () => {
        toast.success('Polygon updated')
        navigate(routes.polygons())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePolygonInput,
    id: EditPolygonById['polygon']['id']
  ) => {
    updatePolygon({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Polygon {polygon?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PolygonForm
          polygon={polygon}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
