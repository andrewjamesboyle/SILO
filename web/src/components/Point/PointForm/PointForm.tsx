import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPointById, CreatePointInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'
import { useEffect, useState } from 'react'

type FormPoint = NonNullable<EditPointById['point']>

interface PointFormProps {
  point?: EditPointById['point']
  onSave: (data: CreatePointInput, id?: FormPoint['id']) => void
  error: RWGqlError
  loading: boolean
  drawingData: any
}

const PointForm = (props: PointFormProps) => {
  const [type, setType] = useState(props.point?.type || '')
  const [description, setDescription] = useState(props.point?.description || '')
  const [geometry, setGeometry] = useState(props.point?.geom || '')

  useEffect(() => {
    if (props.drawingData) {
      const newGeometry = `${props.drawingData[0]}, ${props.drawingData[1]}}`
      setGeometry(newGeometry)
    }
  }, [props.drawingData])

  const onSubmit = (data: FormPoint) => {
    const formData = {
      type,
      description,
      geom: geometry,
    }
    props.onSave(data, props?.point?.id)
  }

  const latitude = props.drawingData && props.drawingData[0]
  const longitude = props.drawingData && props.drawingData[1]

  return (
    <div className="rw-form-wrapper">
      <Form<FormPoint> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          // defaultValue={props.point?.type}
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="type" className="rw-field-error" />

        {/* <Label
          name="in_prj"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          In prj
        </Label>

        <TextField
          name="in_prj"
          defaultValue={props.point?.in_prj}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        {/* <FieldError name="inPrj" className="rw-field-error" /> */}

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          // defaultValue={props.point?.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="geometry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Geometry
        </Label>

        {/* <TextField
          name="geom"
          defaultValue={props.point?.geom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          // validation={{ required: true }}
        /> */}

        {/* Pre-fill the geometry field with drawing data */}
        {/* <TextField
          type="hidden"
          name="geom"
          // value={geometry}
          defaultValue={props.drawingData || props.point?.geom}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        /> */}

        <input
          type="hidden"
          name="geom"
          value={geometry}
          readOnly
          // defaultValue={props.drawingData || props.point?.geom}
          className="rw-input"
        />

        <FieldError name="geometry" className="rw-field-error" />

        {/* <Label
          name="layerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Layer id
        </Label> */}

        {/* <NumberField
          name="layerId"
          defaultValue={props.point?.layerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          // validation={{ required: true }}
        /> */}

        {/* <FieldError name="layerId" className="rw-field-error" /> */}

        {/* TODO:  limit the # of numbers returned in the popout */}
        {/* <div className="rw-label">{props.drawingData || props.point?.geom}</div> */}
        <div className="rw-label">Lat: {latitude.toFixed(8)}</div>
        <div className="rw-label">Long: {longitude.toFixed(8)}</div>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PointForm
