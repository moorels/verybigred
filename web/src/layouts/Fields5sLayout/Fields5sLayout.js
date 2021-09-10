import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const Fields5sLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.fields5S()} className="rw-link">
            Fields5s
          </Link>
        </h1>
        <Link to={routes.newFields5()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Fields5
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default Fields5sLayout
