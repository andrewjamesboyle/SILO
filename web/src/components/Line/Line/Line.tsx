import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeleteLineMutationVariables, FindLineById } from 'types/graphql'

const DELETE_LINE_MUTATION = gql`
  mutation DeleteLineMutation($id: Int!) {
    deleteLine(id: $id) {
      id
    }
  }
`

interface Props {
  line: NonNullable<FindLineById['line']>
}

const Line = ({ line }: Props) => {
  const [deleteLine] = useMutation(DELETE_LINE_MUTATION, {
    onCompleted: () => {
      toast.success('Line deleted')
      navigate(routes.lines())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteLineMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete line ' + id + '?')) {
      deleteLine({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Line {line.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{line.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{line.type}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{line.description}</td>
            </tr>
            <tr>
              <th>Project</th>
              <td>{line.project}</td>
            </tr>
            <tr>
              <th>Layer id</th>
              <td>{line.layerId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLine({ id: line.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(line.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Line
