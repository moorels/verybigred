import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_VAULT_MUTATION = gql`
  mutation DeleteVaultMutation($id: Int!) {
    deleteVault(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Vault = ({ vault }) => {
  const [deleteVault] = useMutation(DELETE_VAULT_MUTATION, {
    onCompleted: () => {
      toast.success('Vault deleted')
      navigate(routes.vaults())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete vault ' + id + '?')) {
      deleteVault({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Vault {vault.vaultname}
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{vault.vaultname}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{vault.vaultusername}</td>
            </tr>
            <tr>
              <th>Password</th>
              <td>{vault.vaultpassword}</td>
            </tr>
            <tr>
              <th>Extra</th>
              <td>{vault.vaultpassword2}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editVault({ id: vault.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(vault.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Vault
