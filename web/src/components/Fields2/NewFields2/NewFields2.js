import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Fields2Form from 'src/components/Fields2/Fields2Form'

const CREATE_FIELDS2_MUTATION = gql`
  mutation CreateFields2Mutation($input: CreateFields2Input!) {
    createFields2(input: $input) {
      id
    }
  }
`

const NewFields2 = () => {
  const [createFields2, { loading, error }] = useMutation(
    CREATE_FIELDS2_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields2 created')
        navigate(routes.fields2S())
      },
    }
  )

  const onSave = (input) => {
    createFields2({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fields2</h2>
      </header>
      <div className="rw-segment-main">
        <Fields2Form onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFields2
