import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Fields4Form from 'src/components/Fields4/Fields4Form'

const CREATE_FIELDS4_MUTATION = gql`
  mutation CreateFields4Mutation($input: CreateFields4Input!) {
    createFields4(input: $input) {
      id
    }
  }
`

const NewFields4 = () => {
  const [createFields4, { loading, error }] = useMutation(
    CREATE_FIELDS4_MUTATION,
    {
      onCompleted: () => {
        toast.success('Fields4 created')
        navigate(routes.fields4S())
      },
    }
  )

  const onSave = (input) => {
    createFields4({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Fields4</h2>
      </header>
      <div className="rw-segment-main">
        <Fields4Form onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFields4
