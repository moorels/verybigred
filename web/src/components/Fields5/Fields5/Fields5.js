import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_FIELDS5_MUTATION = gql`
  mutation DeleteFields5Mutation($id: Int!) {
    deleteFields5(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Fields5 = ({ fields5 }) => {
  const [deleteFields5] = useMutation(DELETE_FIELDS5_MUTATION, {
    onCompleted: () => {
      toast.success('Fields5 deleted')
      navigate(routes.fields5S())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete fields5 ' + id + '?')) {
      deleteFields5({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Fields5 {fields5.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{fields5.id}</td>
            </tr>
            <tr>
              <th>Field1</th>
              <td>{fields5.field1}</td>
            </tr>
            <tr>
              <th>Field2</th>
              <td>{fields5.field2}</td>
            </tr>
            <tr>
              <th>Field3</th>
              <td>{fields5.field3}</td>
            </tr>
            <tr>
              <th>Field4</th>
              <td>{fields5.field4}</td>
            </tr>
            <tr>
              <th>Field5</th>
              <td>{fields5.field5}</td>
            </tr>
            <tr>
              <th>Field6</th>
              <td>{fields5.field6}</td>
            </tr>
            <tr>
              <th>Field7</th>
              <td>{fields5.field7}</td>
            </tr>
            <tr>
              <th>Field8</th>
              <td>{fields5.field8}</td>
            </tr>
            <tr>
              <th>Field9</th>
              <td>{fields5.field9}</td>
            </tr>
            <tr>
              <th>Field10</th>
              <td>{fields5.field10}</td>
            </tr>
            <tr>
              <th>Field11</th>
              <td>{fields5.field11}</td>
            </tr>
            <tr>
              <th>Field12</th>
              <td>{fields5.field12}</td>
            </tr>
            <tr>
              <th>Field13</th>
              <td>{fields5.field13}</td>
            </tr>
            <tr>
              <th>Field14</th>
              <td>{fields5.field14}</td>
            </tr>
            <tr>
              <th>Field15</th>
              <td>{fields5.field15}</td>
            </tr>
            <tr>
              <th>Fields5 id</th>
              <td>{fields5.fields5Id}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFields5({ id: fields5.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(fields5.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Fields5
