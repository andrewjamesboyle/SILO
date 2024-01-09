import type { EditLineById, UpdateLineInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LineForm from 'src/components/Line/LineForm'

export const QUERY = gql`
  query EditLineById($id: Int!) {
    line: line(id: $id) {
      id
      type
      description
      project
      layerId
    }
  }
`
const UPDATE_LINE_MUTATION = gql`
  mutation UpdateLineMutation($id: Int!, $input: UpdateLineInput!) {
    updateLine(id: $id, input: $input) {
      id
      type
      description
      project
      layerId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ line }: CellSuccessProps<EditLineById>) => {
  const [updateLine, { loading, error }] = useMutation(UPDATE_LINE_MUTATION, {
    onCompleted: () => {
      toast.success('Line updated')
      navigate(routes.lines())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateLineInput, id: EditLineById['line']['id']) => {
    updateLine({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Line {line?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LineForm line={line} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
