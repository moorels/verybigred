import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import Fields1Form from 'src/components/Fields1/Fields1Form'

export const QUERY = gql`
  query EditFields1ById($id: Int!) {
    fields1: fields1(id: $id) {
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
      fields1Id
    }
  }
`
const UPDATE_FIELDS1_MUTATION = gql`
  mutation UpdateFields1Mutation($id: Int!, $input: UpdateFields1Input!) {
    updateFields1(id: $id, input: $input) {
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
      fields1Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields1 }) => {
  const [updateFields1, { loading, error }] = useMutation(
    UPDATE_FIELDS1_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields1 updated')
        navigate(routes.fields1S())
      },
    }
  )

  const onSave = (input, id) => {
    updateFields1({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Fields1 {fields1.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Fields1Form
          fields1={fields1}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
