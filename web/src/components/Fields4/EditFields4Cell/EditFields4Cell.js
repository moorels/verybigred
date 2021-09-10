import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import Fields4Form from 'src/components/Fields4/Fields4Form'

export const QUERY = gql`
  query EditFields4ById($id: Int!) {
    fields4: fields4(id: $id) {
      id
      field1
      field2
      field3
      field4
      field5
      field6
      field7
      field8
      field9
      field10
      field11
      field12
      field13
      field14
      field15
      fields4Id
    }
  }
`
const UPDATE_FIELDS4_MUTATION = gql`
  mutation UpdateFields4Mutation($id: Int!, $input: UpdateFields4Input!) {
    updateFields4(id: $id, input: $input) {
      id
      field1
      field2
      field3
      field4
      field5
      field6
      field7
      field8
      field9
      field10
      field11
      field12
      field13
      field14
      field15
      fields4Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields4 }) => {
  const [updateFields4, { loading, error }] = useMutation(
    UPDATE_FIELDS4_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields4 updated')
        navigate(routes.fields4S())
      },
    }
  )

  const onSave = (input, id) => {
    updateFields4({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Fields4 {fields4.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Fields4Form
          fields4={fields4}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
