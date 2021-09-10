import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import VaultForm from 'src/components/Vault/VaultForm'

export const QUERY = gql`
  query EditVaultById($id: Int!) {
    vault: vault(id: $id) {
      id
      vaultname
      vaultusername
      vaultpassword
      vaultpassword2
      userEmailId
    }
  }
`
const UPDATE_VAULT_MUTATION = gql`
  mutation UpdateVaultMutation($id: Int!, $input: UpdateVaultInput!) {
    updateVault(id: $id, input: $input) {
      id
      vaultname
      vaultusername
      vaultpassword
      vaultpassword2
      userEmailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vault }) => {
  const [updateVault, { loading, error }] = useMutation(UPDATE_VAULT_MUTATION, {
    onCompleted: () => {
      toast.success('Vault updated')
      navigate(routes.vaults())
    },
  })

  const onSave = (input, id) => {
    updateVault({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Vault {vault.vaultname}
        </h2>
      </header>
      <div className="rw-segment-main">
        <VaultForm
          vault={vault}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
