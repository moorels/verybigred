import Fields2 from 'src/components/Fields2/Fields2'

export const QUERY = gql`
  query FindFields2ById($id: Int!) {
    fields2: fields2(id: $id) {
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

export const Empty = () => <div>Fields2 not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields2 }) => {
  return <Fields2 fields2={fields2} />
}
