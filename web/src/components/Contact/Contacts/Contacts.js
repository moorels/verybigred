import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Contact/ContactsCell'

const DELETE_CONTACT_MUTATION = gql`
  mutation DeleteContactMutation($id: Int!) {
    deleteContact(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const ContactsList = ({ contacts }) => {
  const [deleteContact] = useMutation(DELETE_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success('Contact deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete contact ' + id + '?')) {
      deleteContact({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>

            <th>Mobile</th>

            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{truncate(contact.firstname)}</td>
              <td>{truncate(contact.lastname)}</td>
              <td>{truncate(contact.email)}</td>
              <td>{truncate(contact.mobile)}</td>

              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.contact({ id: contact.id })}
                    title={'Show contact ' + contact.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editContact({ id: contact.id })}
                    title={'Edit contact ' + contact.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete contact ' + contact.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(contact.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContactsList
