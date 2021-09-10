import { Link, routes } from '@redwoodjs/router'

import Fields5s from 'src/components/Fields5/Fields5s'

export const QUERY = gql`
  query FindFields5s {
    fields5S {
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
      fields5Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fields5S yet. '}
      <Link to={routes.newFields5()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields5S }) => {
  return <Fields5s fields5S={fields5S} />
}
