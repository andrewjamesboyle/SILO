import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Line/LinesCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteLineMutationVariables, FindLines } from 'types/graphql'

const DELETE_LINE_MUTATION = gql`
  mutation DeleteLineMutation($id: Int!) {
    deleteLine(id: $id) {
      id
    }
  }
`

const LinesList = ({ lines }: FindLines) => {
  const [deleteLine] = useMutation(DELETE_LINE_MUTATION, {
    onCompleted: () => {
      toast.success('Line deleted')
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

  const onDeleteClick = (id: DeleteLineMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete line ' + id + '?')) {
      deleteLine({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Description</th>
            <th>Project</th>
            <th>Layer id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line) => (
            <tr key={line.id}>
              <td>{truncate(line.id)}</td>
              <td>{truncate(line.type)}</td>
              <td>{truncate(line.description)}</td>
              <td>{truncate(line.project)}</td>
              <td>{truncate(line.layerId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.line({ id: line.id })}
                    title={'Show line ' + line.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLine({ id: line.id })}
                    title={'Edit line ' + line.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete line ' + line.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(line.id)}
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

export default LinesList
