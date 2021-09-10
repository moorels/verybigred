import { Link, routes } from '@redwoodjs/router'

import Fields1s from 'src/components/Fields1/Fields1s'

export const QUERY = gql`
  query FindFields1s {
    fields1S {
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
      fields1Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fields1S yet. '}
      <Link to={routes.newFields1()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields1S }) => {
  return <Fields1s fields1S={fields1S} />
}
