import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const TeamForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.team?.id)
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
          defaultValue={props.team?.name}
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
          defaultValue={props.team?.handle}
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
          defaultValue={props.team?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>
        <TextField
          name="city"
          defaultValue={props.team?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="city" className="rw-field-error" />

        <Label
          name="abbreviation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Abbreviation
        </Label>
        <TextField
          name="abbreviation"
          defaultValue={props.team?.abbreviation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="abbreviation" className="rw-field-error" />

        <Label
          name="conference"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Conference
        </Label>
        <TextField
          name="conference"
          defaultValue={props.team?.conference}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="conference" className="rw-field-error" />

        <Label
          name="division"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Division
        </Label>
        <TextField
          name="division"
          defaultValue={props.team?.division}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="division" className="rw-field-error" />

        <Label
          name="established"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Established
        </Label>
        <TextField
          name="established"
          defaultValue={props.team?.established}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="established" className="rw-field-error" />

        <Label
          name="wins"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Wins
        </Label>
        <NumberField
          name="wins"
          defaultValue={props.team?.wins}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="wins" className="rw-field-error" />

        <Label
          name="losses"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Losses
        </Label>
        <NumberField
          name="losses"
          defaultValue={props.team?.losses}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="losses" className="rw-field-error" />

        <Label
          name="winPercentage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Win percentage
        </Label>
        <TextField
          name="winPercentage"
          defaultValue={props.team?.winPercentage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />
        <FieldError name="winPercentage" className="rw-field-error" />

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

export default TeamForm
