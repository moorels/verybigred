import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'


import VaultsCell from 'src/components/Vault/VaultsCell/VaultsCell'



const VaultsLayout = ({ children }) => {




  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.vaults()} className="rw-link">
            Vaults
          </Link>
        </h1>
        <Link to={routes.newVault()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Vault
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default VaultsLayout
