import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const Fields4sLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.fields4S()} className="rw-link">
            Fields4s
          </Link>
        </h1>
        <Link to={routes.newFields4()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Fields4
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default Fields4sLayout
