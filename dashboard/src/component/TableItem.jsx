import  PropTypes  from 'prop-types'
import { FaPencilAlt, FaTrash } from 'react-icons/fa/index.esm';

export const TableItem = ({product: {id, title,category,detail} }) => {
  const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <tr>
       <td>{id}</td>
    <td>{title}</td>
    <td>{category.name}</td>
    <td>${toThousand(detail.price)}</td>
    <td>
    {detail.discount  ? "$"+ detail.discount   : "s/n"}
    
    </td>
    <td>
    ${toThousand(detail.price - (detail.price*detail.discount/100).toFixed(0)) }  
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
   product : PropTypes.object,
   detail : PropTypes.object
 
}
