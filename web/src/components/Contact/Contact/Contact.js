import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import { useRef, useContext } from 'react'
import { UserContext } from '../../../UserContext'

const DELETE_CONTACT_MUTATION = gql`
  mutation DeleteContactMutation($id: Int!) {
    deleteContact(id: $id) {
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

const Contact = ({ contact }) => {
  const c1 = contact.email

  const { setCust } = useContext(UserContext)
  setCust(c1)

  const [deleteContact] = useMutation(DELETE_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success('Contact deleted')
      navigate(routes.contacts())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete contact ' + id + '?')) {
      deleteContact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Contact {contact.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Firstname</th>
              <td>{contact.firstname}</td>
            </tr>
            <tr>
              <th>Lastname</th>
              <td>{contact.lastname}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <th>Landline</th>

              <td>{contact.landline}</td>
            </tr>
            <tr>
              <th>Mobile</th>
              <td>{contact.mobile}</td>
            </tr>
            <tr>
              <th>Website</th>
              <td>{contact.website}</td>
            </tr>
            <tr>
              <th>Street</th>
              <td>{contact.street}</td>
            </tr>
            <tr>
              <th>Suburb</th>
              <td>{contact.suburb}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{contact.notes}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editContact({ id: contact.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(contact.id)}
        >
          Delete
        </button>
        <Link
          to={routes.appointments({ appointEmailId: contact.email })}
          className="rw-button rw-button-blue"
        >
          Appointments
        </Link>
      </nav>
    </>
  )
}

export default Contact
