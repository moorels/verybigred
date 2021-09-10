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

const Fields3Form = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.fields3?.id)
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
          name="field1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field1
        </Label>
        <TextField
          name="field1"
          defaultValue={props.fields3?.field1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field1" className="rw-field-error" />

        <Label
          name="field2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field2
        </Label>
        <TextField
          name="field2"
          defaultValue={props.fields3?.field2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field2" className="rw-field-error" />

        <Label
          name="field3"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field3
        </Label>
        <TextField
          name="field3"
          defaultValue={props.fields3?.field3}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field3" className="rw-field-error" />

        <Label
          name="field4"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field4
        </Label>
        <TextField
          name="field4"
          defaultValue={props.fields3?.field4}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field4" className="rw-field-error" />

        <Label
          name="field5"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field5
        </Label>
        <TextField
          name="field5"
          defaultValue={props.fields3?.field5}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field5" className="rw-field-error" />

        <Label
          name="field6"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field6
        </Label>
        <TextField
          name="field6"
          defaultValue={props.fields3?.field6}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field6" className="rw-field-error" />

        <Label
          name="field7"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field7
        </Label>
        <TextField
          name="field7"
          defaultValue={props.fields3?.field7}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field7" className="rw-field-error" />

        <Label
          name="field8"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field8
        </Label>
        <TextField
          name="field8"
          defaultValue={props.fields3?.field8}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field8" className="rw-field-error" />

        <Label
          name="field9"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field9
        </Label>
        <TextField
          name="field9"
          defaultValue={props.fields3?.field9}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field9" className="rw-field-error" />

        <Label
          name="field10"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field10
        </Label>
        <TextField
          name="field10"
          defaultValue={props.fields3?.field10}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field10" className="rw-field-error" />

        <Label
          name="field11"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field11
        </Label>
        <TextField
          name="field11"
          defaultValue={props.fields3?.field11}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field11" className="rw-field-error" />

        <Label
          name="field12"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field12
        </Label>
        <TextField
          name="field12"
          defaultValue={props.fields3?.field12}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field12" className="rw-field-error" />

        <Label
          name="field13"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field13
        </Label>
        <TextField
          name="field13"
          defaultValue={props.fields3?.field13}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field13" className="rw-field-error" />

        <Label
          name="field14"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field14
        </Label>
        <TextField
          name="field14"
          defaultValue={props.fields3?.field14}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field14" className="rw-field-error" />

        <Label
          name="field15"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Field15
        </Label>
        <TextField
          name="field15"
          defaultValue={props.fields3?.field15}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="field15" className="rw-field-error" />

        <Label
          name="fields3Id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Fields3 id
        </Label>
        <TextField
          name="fields3Id"
          defaultValue={props.fields3?.fields3Id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="fields3Id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default Fields3Form
