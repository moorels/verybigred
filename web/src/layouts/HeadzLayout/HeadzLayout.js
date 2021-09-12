import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useState, useEffect } from 'react'
import styles from './HeadzLayout.module.css'

const HeadzLayout = ({ children }) => {
  const date = new Date()
  const tt = date.toLocaleTimeString()
  const [ti, setTi] = useState()

  useEffect(() => {
    setTimeout(() => {
      setTi(date.toLocaleTimeString())
    }, 1000)
  })

  const { isAuthenticated } = useAuth()
  const logmeout = useAuth()

  return (
    <>
      <div className={styles.body}>
        <header className="text-gray-600 body-font max-w-screen-md">
          <div className="container  flex flex-wrap p-5 flex-col md:flex-row items-center ">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-yellow-500"
                viewBox="0 0 32 32"
              >
                <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
              </svg>
              <Link to={routes.homepage()}>
                <span className="ml-3 text-xl ">Password Safe</span>
              </Link>
            </div>
            <nav className=" md:ml-4 	flex flex-wrap items-center text-base justify-center">
              <ul>
                <li>
                  <div className="space-x-1 ">
                    <span className=" p-2 h-9 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-700">
                      {isAuthenticated ? (
                        <button onClick={() => logmeout.logOut()}>
                          <span className=" relative inline-flex rounded-full h-2 w-2 bg-gray-100">
                            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                          </span>

                          <span className="p-2 w-4">Logout</span>
                        </button>
                      ) : (
                        <Link
                          className="p-2 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-700"
                          to={routes.login()}
                        >
                          <span className=" relative inline-flex rounded-full h-2 w-2 bg-gray-100">
                            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                          </span>
                          <span className="p-1 w-4"> Login</span>
                        </Link>
                      )}
                    </span>
                    <Link
                      className="p-2 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-700"
                      to={routes.vaults()}
                    >
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-100">
                        <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Vault</span>
                    </Link>

                    <Link
                      className="p-2 text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-700"
                      to={routes.contacts()}
                    >
                      <span className=" relative inline-flex rounded-full h-2 w-2 bg-gray-100">
                        <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
                      </span>
                      <span> Contacts</span>
                    </Link>
                  </div>
                </li>
              </ul>
              <div className="p-2 m-3 w-60 justify-center text-center text-indigo-100 transition-colors duration-150 bg-blue-500 rounded-lg focus:shadow-outline hover:bg-blue-700">
                {`${date.toDateString()} ${tt} `}
              </div>
            </nav>
            <div className="p-2   bg-white-500 place-content-center"></div>

            <div className={styles.typewriter}>
              <h1>Welcome to Password Safe.</h1>
            </div>
          </div>
        </header>
      </div>
      {children}
    </>
  )
}

export default HeadzLayout

export async function getStaticProps() {
  const res = await fetch('http://www.google.com')
  const data = res.json
  console.log('test')
  console.log(data)

  return {
    props: {
      data,
    },
  }
}
