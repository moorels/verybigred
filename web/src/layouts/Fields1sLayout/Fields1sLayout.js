import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const Fields1sLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.fields1S()} className="rw-link">
            Fields1s
          </Link>
        </h1>
        <Link to={routes.newFields1()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Fields1
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default Fields1sLayout
