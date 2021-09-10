import AppointmentsCell from 'src/components/Appointment/AppointmentsCell'
import { UserContext } from '../../../UserContext'
import { useContext } from 'react'

const AppointmentsPage = () => {

const { cust } = useContext(UserContext)

  return <AppointmentsCell appointEmailId={cust}/>
}

export default AppointmentsPage
