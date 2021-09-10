import VaultsCell from 'src/components/Vault/VaultsCell'
import { UserContext } from '../../../UserContext'
import { useContext } from 'react'

const VaultsPage = () => {
const { user } = useContext(UserContext)
console.log(user)

  return <VaultsCell userEmailId={user} />
}

export default VaultsPage
