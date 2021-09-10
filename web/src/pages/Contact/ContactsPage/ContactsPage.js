import ContactsCell from 'src/components/Contact/ContactsCell'
import { UserContext } from '../../../UserContext'
import { useContext } from 'react'

const ContactsPage = () => {

const { user } = useContext(UserContext)



  return <ContactsCell contactEmailId={user}/>
}

export default ContactsPage


