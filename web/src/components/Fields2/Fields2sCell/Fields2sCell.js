import { Link, routes } from '@redwoodjs/router'

import Fields2s from 'src/components/Fields2/Fields2s'

export const QUERY = gql`
  query FindFields2s {
    fields2S {
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
      fields2Id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No fields2S yet. '}
      <Link to={routes.newFields2()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields2S }) => {
  return <Fields2s fields2S={fields2S} />
}
