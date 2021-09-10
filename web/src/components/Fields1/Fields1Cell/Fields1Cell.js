import Fields1 from 'src/components/Fields1/Fields1'

export const QUERY = gql`
  query FindFields1ById($id: Int!) {
    fields1: fields1(id: $id) {
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

export const Empty = () => <div>Fields1 not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields1 }) => {
  return <Fields1 fields1={fields1} />
}
