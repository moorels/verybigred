import Vault from 'src/components/Vault/Vault'

export const QUERY = gql`
  query FindVaultById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Vault not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vault }) => {
  return <Vault vault={vault} />
}
