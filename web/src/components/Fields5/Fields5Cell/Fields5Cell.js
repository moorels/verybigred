import Fields5 from 'src/components/Fields5/Fields5'

export const QUERY = gql`
  query FindFields5ById($id: Int!) {
    fields5: fields5(id: $id) {
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

export const Empty = () => <div>Fields5 not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields5 }) => {
  return <Fields5 fields5={fields5} />
}
