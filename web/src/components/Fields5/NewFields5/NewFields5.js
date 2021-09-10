import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Fields5Form from 'src/components/Fields5/Fields5Form'

const CREATE_FIELDS5_MUTATION = gql`
  mutation CreateFields5Mutation($input: CreateFields5Input!) {
    createFields5(input: $input) {
      id
    }
  }
`

const NewFields5 = () => {
  const [createFields5, { loading, error }] = useMutation(
    CREATE_FIELDS5_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields5 created')
        navigate(routes.fields5S())
      },
    }
  )

  const onSave = (input) => {
    createFields5({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fields5</h2>
      </header>
      <div className="rw-segment-main">
        <Fields5Form onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFields5
