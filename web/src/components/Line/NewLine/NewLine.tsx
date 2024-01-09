import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LineForm from 'src/components/Line/LineForm'

import type { CreateLineInput } from 'types/graphql'

const CREATE_LINE_MUTATION = gql`
  mutation CreateLineMutation($input: CreateLineInput!) {
    createLine(input: $input) {
      id
    }
  }
`

const NewLine = () => {
  const [createLine, { loading, error }] = useMutation(CREATE_LINE_MUTATION, {
    onCompleted: () => {
      toast.success('Line created')
      navigate(routes.lines())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateLineInput) => {
    createLine({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Line</h2>
      </header>
      <div className="rw-segment-main">
        <LineForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLine
