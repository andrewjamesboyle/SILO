import { navigate, routes } from '@redwoodjs/router'
import DrawFeature from 'src/components/DrawFeature/DrawFeature'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PointForm from 'src/components/Point/PointForm'

import type { CreatePointInput } from 'types/graphql'
import { useMap } from 'src/context/MapContext'

const CREATE_POINT_MUTATION = gql`
  mutation CreatePointMutation($input: CreatePointInput!) {
    createPoint(input: $input) {
      id
    }
  }
`

const NewPoint = () => {
  const [createPoint, { loading, error }] = useMutation(CREATE_POINT_MUTATION, {
    onCompleted: () => {
      toast.success('Point created')
      navigate(routes.points())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const { state } = useMap()
  const drawingData = state.drawingData

  const onSave = (input: CreatePointInput) => {
    createPoint({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Point</h2>
      </header>
      <div className="rw-segment-main">
        {/* <DrawFeature mapRef={mapRef} onDrawCreate={handleDrawCreate} /> */}
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
