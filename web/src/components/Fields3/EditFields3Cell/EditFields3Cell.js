import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import Fields3Form from 'src/components/Fields3/Fields3Form'

export const QUERY = gql`
  query EditFields3ById($id: Int!) {
    fields3: fields3(id: $id) {
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
      fields3Id
    }
  }
`
const UPDATE_FIELDS3_MUTATION = gql`
  mutation UpdateFields3Mutation($id: Int!, $input: UpdateFields3Input!) {
    updateFields3(id: $id, input: $input) {
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
      fields3Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields3 }) => {
  const [updateFields3, { loading, error }] = useMutation(
    UPDATE_FIELDS3_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields3 updated')
        navigate(routes.fields3S())
      },
    }
  )

  const onSave = (input, id) => {
    updateFields3({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Fields3 {fields3.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Fields3Form
          fields3={fields3}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
