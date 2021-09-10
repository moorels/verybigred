import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const Fields2sLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.fields2S()} className="rw-link">
            Fields2s
          </Link>
        </h1>
        <Link to={routes.newFields2()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Fields2
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default Fields2sLayout
