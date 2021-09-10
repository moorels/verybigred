import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const Fields3sLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.fields3S()} className="rw-link">
            Fields3s
          </Link>
        </h1>
        <Link to={routes.newFields3()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Fields3
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default Fields3sLayout
