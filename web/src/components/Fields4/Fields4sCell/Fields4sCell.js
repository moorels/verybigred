import { Link, routes } from '@redwoodjs/router'

import Fields4s from 'src/components/Fields4/Fields4s'

export const QUERY = gql`
  query FindFields4s {
    fields4S {
      id
      field1
      field2
      field3
      field4
      field5
      field6
      field7
      field8
      field9
      field10
      field11
      field12
      field13
      field14
      field15
      fields4Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fields4S yet. '}
      <Link to={routes.newFields4()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields4S }) => {
  return <Fields4s fields4S={fields4S} />
}
