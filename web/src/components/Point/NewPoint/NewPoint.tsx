import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PointForm from 'src/components/Point/PointForm'

import { gql } from '@apollo/client'
import { useMap } from 'src/context/MapContext'
import { CreatePointInput } from 'types/graphql'
import { useAuth } from 'src/auth'

const CREATE_POINT_MUTATION = gql`
  mutation CreatePointMutation($input: CreatePointInput!) {
    createPoint(input: $input) {
      id
    }
  }
`

const NewPoint = () => {
  const { currentUser } = useAuth()
  const [createPoint, { loading, error }] = useMutation(CREATE_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('Point created')
      // navigate(routes.points())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const { state } = useMap()
  const drawingData = state.drawingData
  console.log('drawingData', drawingData)

  const onSave = (input: CreatePointInput) => {
    console.log('input', input)

    const authorizedInput = {
      ...input,
      createdById: currentUser?.sub,
    }
    console.log('authorizedInput', authorizedInput)
    createPoint({ variables: { input: authorizedInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Point</h2>
      </header>
      <div className="rw-segment-main">
        <PointForm
          onSave={onSave}
          loading={loading}
          error={error}
          drawingData={drawingData}
        />
      </div>
    </div>
  )
}

export default NewPoint
