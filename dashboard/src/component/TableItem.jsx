import  PropTypes  from 'prop-types'
import { FaPencilAlt, FaTrash } from 'react-icons/fa/index.esm';

export const TableItem = ({products: {id, title,category, price,discount} }) => {
  return (
    <tr>
       <td>{id}</td>
    <td>{title}</td>
    <td>{category.name}</td>
    <td>{price}</td>
    <td>
    {discount }
    </td>
    
    <td>
      <div className='d-flex '>
        <button className='btn btn-sm btn-outline-success rounded mr-3' ><FaPencilAlt /></button>
        <button className='btn btn-sm btn-outline-danger rounded ' ><FaTrash/></button>

      </div>
    </td>
  </tr>
  )
}

TableItem.propTypes = {
   products : PropTypes.object
 
}
