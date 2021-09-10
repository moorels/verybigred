import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const AppointmentsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.appointments()} className="rw-link">
            Appointments
          </Link>
        </h1>
        <Link
          to={routes.newAppointment()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Appointment
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default AppointmentsLayout
