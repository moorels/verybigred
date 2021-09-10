import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Fields3Form from 'src/components/Fields3/Fields3Form'

const CREATE_FIELDS3_MUTATION = gql`
  mutation CreateFields3Mutation($input: CreateFields3Input!) {
    createFields3(input: $input) {
      id
    }
  }
`

const NewFields3 = () => {
  const [createFields3, { loading, error }] = useMutation(
    CREATE_FIELDS3_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields3 created')
        navigate(routes.fields3S())
      },
    }
  )

  const onSave = (input) => {
    createFields3({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fields3</h2>
      </header>
      <div className="rw-segment-main">
        <Fields3Form onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFields3
