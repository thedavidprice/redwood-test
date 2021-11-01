import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PlayerForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.player?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.player?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="handle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Handle
        </Label>
        <TextField
          name="handle"
          defaultValue={props.player?.handle}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="handle" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>
        <TextField
          name="slug"
          defaultValue={props.player?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="height"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Height
        </Label>
        <TextField
          name="height"
          defaultValue={props.player?.height}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="height" className="rw-field-error" />

        <Label
          name="weight"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Weight
        </Label>
        <TextField
          name="weight"
          defaultValue={props.player?.weight}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="weight" className="rw-field-error" />

        <Label
          name="number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number
        </Label>
        <TextField
          name="number"
          defaultValue={props.player?.number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="number" className="rw-field-error" />

        <Label
          name="position"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Position
        </Label>
        <TextField
          name="position"
          defaultValue={props.player?.position}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="position" className="rw-field-error" />

        <Label
          name="teamId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Team id
        </Label>
        <TextField
          name="teamId"
          defaultValue={props.player?.teamId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="teamId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlayerForm
