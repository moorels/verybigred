import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import Fields5Form from 'src/components/Fields5/Fields5Form'

export const QUERY = gql`
  query EditFields5ById($id: Int!) {
    fields5: fields5(id: $id) {
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
      fields5Id
    }
  }
`
const UPDATE_FIELDS5_MUTATION = gql`
  mutation UpdateFields5Mutation($id: Int!, $input: UpdateFields5Input!) {
    updateFields5(id: $id, input: $input) {
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
      fields5Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields5 }) => {
  const [updateFields5, { loading, error }] = useMutation(
    UPDATE_FIELDS5_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields5 updated')
        navigate(routes.fields5S())
      },
    }
  )

  const onSave = (input, id) => {
    updateFields5({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Fields5 {fields5.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Fields5Form
          fields5={fields5}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
