import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import Passgen from '../HeadzLayout/Passgen'
import { useState } from 'react'

const VaultsLayout = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header px-4 py-1">
        <h1 className="bg-blue-500 text-white active:bg-blue-500 font-bold uppercase text-sm px-4 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          <Link to={routes.vaults()}>Vaults</Link>
        </h1>

        <Link to={routes.newVault()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Vault
        </Link>
      </header>
      <div className="container flex-wrap p-4 flex-col md:flex-row items-center ">
        <button
          className="bg-blue-500  text-white active:bg-blue-500 font-bold uppercase text-sm px-4 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {' '}
          PassWord Generator{' '}
        </button>{' '}
        {showModal ? (
          <>
            {' '}
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}{' '}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}{' '}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      <Passgen />{' '}
                    </h3>{' '}
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 items-center  duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default VaultsLayout
