import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_APPOINTMENT_MUTATION = gql`
  mutation DeleteAppointmentMutation($id: Int!) {
    deleteAppointment(id: $id) {
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

const Appointment = ({ appointment }) => {
  const [deleteAppointment] = useMutation(DELETE_APPOINTMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Appointment deleted')
      navigate(routes.appointments())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete appointment ' + id + '?')) {
      deleteAppointment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Appointment {appointment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{appointment.id}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{appointment.time}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{appointment.date}</td>
            </tr>
            <tr>
              <th>Appoint email id</th>
              <td>{appointment.appointEmailId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAppointment({ id: appointment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(appointment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Appointment
