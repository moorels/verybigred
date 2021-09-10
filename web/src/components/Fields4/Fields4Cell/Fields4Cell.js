import Fields4 from 'src/components/Fields4/Fields4'

export const QUERY = gql`
  query FindFields4ById($id: Int!) {
    fields4: fields4(id: $id) {
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

export const Empty = () => <div>Fields4 not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields4 }) => {
  return <Fields4 fields4={fields4} />
}
