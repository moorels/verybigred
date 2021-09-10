import { Link, routes } from '@redwoodjs/router'

import Vaults from 'src/components/Vault/Vaults'

export const QUERY = gql`
  query FindManyVaults($userEmailId: String) {
    vaultsID(userEmailId: $userEmailId) {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No vaults yet. '}
      <Link to={routes.newVault()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ vaultsID }) => {
  return <Vaults vaults={vaultsID} />
}

