import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Fields1Form from 'src/components/Fields1/Fields1Form'

const CREATE_FIELDS1_MUTATION = gql`
  mutation CreateFields1Mutation($input: CreateFields1Input!) {
    createFields1(input: $input) {
      id
    }
  }
`

const NewFields1 = () => {
  const [createFields1, { loading, error }] = useMutation(
    CREATE_FIELDS1_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields1 created')
        navigate(routes.fields1S())
      },
    }
  )

  const onSave = (input) => {
    createFields1({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fields1</h2>
      </header>
      <div className="rw-segment-main">
        <Fields1Form onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFields1
