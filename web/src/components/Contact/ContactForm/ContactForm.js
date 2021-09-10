import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { UserContext } from '../../../UserContext'
import { useContext } from 'react'
import { Link, routes } from '@redwoodjs/router'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ContactForm = (props) => {

  const { user } = useContext(UserContext)
  const onSubmit = (data) => {
    props.onSave(data, props?.contact?.id)
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
          name="firstname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Firstname
        </Label>
        <TextField
          name="firstname"
          defaultValue={props.contact?.firstname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstname" className="rw-field-error" />

        <Label
          name="lastname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lastname
        </Label>
        <TextField
          name="lastname"
          defaultValue={props.contact?.lastname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastname" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.contact?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="landline"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Landline
        </Label>
        <TextField
          name="landline"
          defaultValue={props.contact?.landline}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="landline" className="rw-field-error" />

        <Label
          name="mobile"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Mobile
        </Label>
        <TextField
          name="mobile"
          defaultValue={props.contact?.mobile}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="mobile" className="rw-field-error" />

        <Label
          name="website"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Website
        </Label>
        <TextField
          name="website"
          defaultValue={props.contact?.website}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="website" className="rw-field-error" />

        <Label
          name="street"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Street
        </Label>
        <TextField
          name="street"
          defaultValue={props.contact?.street}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="street" className="rw-field-error" />

        <Label
          name="suburb"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Suburb
        </Label>
        <TextField
          name="suburb"
          defaultValue={props.contact?.suburb}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="suburb" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>
        <TextField
          name="notes"
          defaultValue={props.contact?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label
          name="contactEmailId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          .
        </Label>
        <TextField
          name="contactEmailId"
          defaultValue={user}
          hidden
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contactEmailId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
