import { Link, routes } from '@redwoodjs/router'

import Appointments from 'src/components/Appointment/Appointments'

export const QUERY = gql`
  query FindManyAppointments($appointEmailId: String) {
    appointmentsID(appointEmailId: $appointEmailId) {
      id
      time
      date
      appointEmailId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No appointments yet. '}
      <Link to={routes.newAppointment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ appointmentsID }) => {
  return <Appointments appointments={appointmentsID} />
}
