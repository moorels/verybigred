import { Link, routes } from '@redwoodjs/router'

import Contacts from 'src/components/Contact/Contacts'

export const QUERY = gql`
  query FindManyContacts($contactEmailId: String) {
    contactsID(contactEmailId: $contactEmailId) {
      id
      firstname
      lastname
      email
      landline
      mobile
      website
      street
      suburb
      notes
      contactEmailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No contacts yet. '}
      <Link to={routes.newContact()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ contactsID }) => {
  return <Contacts contacts={contactsID} />
}
