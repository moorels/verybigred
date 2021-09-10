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

const VaultForm = (props) => {
const { user } = useContext(UserContext)

  const onSubmit = (data) => {
    props.onSave(data, props?.vault?.id)
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
          name="vaultname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vaultname
        </Label>
        <TextField
          name="vaultname"
          defaultValue={props.vault?.vaultname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vaultname" className="rw-field-error" />

        <Label
          name="vaultusername"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vaultusername
        </Label>
        <TextField
          name="vaultusername"
          defaultValue={props.vault?.vaultusername}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vaultusername" className="rw-field-error" />

        <Label
          name="vaultpassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vaultpassword
        </Label>
        <TextField
          name="vaultpassword"
          defaultValue={props.vault?.vaultpassword}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vaultpassword" className="rw-field-error" />

        <Label
          name="vaultpassword2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vaultpassword2
        </Label>
        <TextField
          name="vaultpassword2"
          defaultValue={props.vault?.vaultpassword2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vaultpassword2" className="rw-field-error" />

        <Label
          name="userEmailId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          .
        </Label>
        <TextField
          name="userEmailId"
          defaultValue={user}
          className="rw-input"
          hidden
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userEmailId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VaultForm
