import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditPointById, UpdatePointInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPoint = NonNullable<EditPointById['point']>

interface PointFormProps {
  point?: EditPointById['point']
  onSave: (data: UpdatePointInput, id?: FormPoint['id']) => void
  error: RWGqlError
  loading: boolean
}

const PointForm = (props: PointFormProps) => {
  const onSubmit = (data: FormPoint) => {
    props.onSave(data, props?.point?.id)
  }

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
          defaultValue={props.point?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
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
        />

        <FieldError name="in_prj" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.point?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label
          name="geometry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Geometry
        </Label>

        <TextField
          name="geometry"
          defaultValue={props.point?.geometry}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="geometry" className="rw-field-error" />

        <Label
          name="layerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Layer id
        </Label>

        <NumberField
          name="layerId"
          defaultValue={props.point?.layerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="layerId" className="rw-field-error" />

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
