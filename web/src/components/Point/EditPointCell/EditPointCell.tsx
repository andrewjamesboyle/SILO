import type { EditPointById, UpdatePointInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PointForm from 'src/components/Point/PointForm'

export const QUERY = gql`
  query EditPointById($id: Int!) {
    point: point(id: $id) {
      id
      type
      description
      project
      layerId
      createdById
    }
  }
`
const UPDATE_POINT_MUTATION = gql`
  mutation UpdatePointMutation($id: Int!, $input: UpdatePointInput!) {
    updatePoint(id: $id, input: $input) {
      id
      type
      description
      project
      layerId
      createdById
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ point }: CellSuccessProps<EditPointById>) => {
  const [updatePoint, { loading, error }] = useMutation(UPDATE_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('Point updated')
      navigate(routes.points())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdatePointInput,
    id: EditPointById['point']['id']
  ) => {
    updatePoint({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Point {point?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PointForm
          point={point}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
