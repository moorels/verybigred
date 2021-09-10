import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ContactsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.contacts()} className="rw-link">
            Contacts
          </Link>
        </h1>
        <Link to={routes.newContact()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Contact
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ContactsLayout
