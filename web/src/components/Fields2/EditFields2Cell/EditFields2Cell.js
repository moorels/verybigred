import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import Fields2Form from 'src/components/Fields2/Fields2Form'

export const QUERY = gql`
  query EditFields2ById($id: Int!) {
    fields2: fields2(id: $id) {
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
      fields2Id
    }
  }
`
const UPDATE_FIELDS2_MUTATION = gql`
  mutation UpdateFields2Mutation($id: Int!, $input: UpdateFields2Input!) {
    updateFields2(id: $id, input: $input) {
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
      fields2Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields2 }) => {
  const [updateFields2, { loading, error }] = useMutation(
    UPDATE_FIELDS2_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields2 updated')
        navigate(routes.fields2S())
      },
    }
  )

  const onSave = (input, id) => {
    updateFields2({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Fields2 {fields2.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Fields2Form
          fields2={fields2}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
