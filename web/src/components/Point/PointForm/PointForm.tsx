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
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.point?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="project"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Project
        </Label>

        <TextField
          name="project"
          defaultValue={props.point?.project}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="project" className="rw-field-error" />

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
          emptyAs={'undefined'}
        />

        <FieldError name="layerId" className="rw-field-error" />

        <Label
          name="createdById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by id
        </Label>

        <TextField
          name="createdById"
          defaultValue={props.point?.createdById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="createdById" className="rw-field-error" />

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
