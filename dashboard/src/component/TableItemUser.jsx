import  PropTypes  from 'prop-types'


export const TableItemUser = ({users: {id, name,email} }) => {
  
  return (
    <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{email}</td>
  </tr>
  )
}

TableItemUser.propTypes = {
   users : PropTypes.object,
}
