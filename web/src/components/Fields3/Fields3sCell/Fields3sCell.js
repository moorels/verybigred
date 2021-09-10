import { Link, routes } from '@redwoodjs/router'

import Fields3s from 'src/components/Fields3/Fields3s'

export const QUERY = gql`
  query FindFields3s {
    fields3S {
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
      fields3Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fields3S yet. '}
      <Link to={routes.newFields3()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields3S }) => {
  return <Fields3s fields3S={fields3S} />
}
