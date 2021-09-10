import Fields3 from 'src/components/Fields3/Fields3'

export const QUERY = gql`
  query FindFields3ById($id: Int!) {
    fields3: fields3(id: $id) {
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

export const Empty = () => <div>Fields3 not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ fields3 }) => {
  return <Fields3 fields3={fields3} />
}
