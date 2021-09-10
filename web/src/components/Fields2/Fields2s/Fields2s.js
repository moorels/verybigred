import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Fields2/Fields2sCell'

const DELETE_FIELDS2_MUTATION = gql`
  mutation DeleteFields2Mutation($id: Int!) {
    deleteFields2(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Fields2sList = ({ fields2S }) => {
  const [deleteFields2] = useMutation(DELETE_FIELDS2_MUTATION, {
    onCompleted: () => {
      toast.success('Fields2 deleted')
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fields2 ' + id + '?')) {
      deleteFields2({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Field1</th>
            <th>Field2</th>
            <th>Field3</th>
            <th>Field4</th>
            <th>Field5</th>
            <th>Field6</th>
            <th>Field7</th>
            <th>Field8</th>
            <th>Field9</th>
            <th>Field10</th>
            <th>Field11</th>
            <th>Field12</th>
            <th>Field13</th>
            <th>Field14</th>
            <th>Field15</th>
            <th>Fields2 id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {fields2S.map((fields2) => (
            <tr key={fields2.id}>
              <td>{truncate(fields2.id)}</td>
              <td>{truncate(fields2.field1)}</td>
              <td>{truncate(fields2.field2)}</td>
              <td>{truncate(fields2.field3)}</td>
              <td>{truncate(fields2.field4)}</td>
              <td>{truncate(fields2.field5)}</td>
              <td>{truncate(fields2.field6)}</td>
              <td>{truncate(fields2.field7)}</td>
              <td>{truncate(fields2.field8)}</td>
              <td>{truncate(fields2.field9)}</td>
              <td>{truncate(fields2.field10)}</td>
              <td>{truncate(fields2.field11)}</td>
              <td>{truncate(fields2.field12)}</td>
              <td>{truncate(fields2.field13)}</td>
              <td>{truncate(fields2.field14)}</td>
              <td>{truncate(fields2.field15)}</td>
              <td>{truncate(fields2.fields2Id)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.fields2({ id: fields2.id })}
                    title={'Show fields2 ' + fields2.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFields2({ id: fields2.id })}
                    title={'Edit fields2 ' + fields2.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete fields2 ' + fields2.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(fields2.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fields2sList
