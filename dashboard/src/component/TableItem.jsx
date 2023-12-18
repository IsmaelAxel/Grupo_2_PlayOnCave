import PropTypes from "prop-types";
import { FaPencilAlt, FaTrash } from "react-icons/fa/index.esm";

export const TableItem = ({
  product: { id, title, category, detail },
  handleEditProduct,
  handleDeleteProduct,
}) => {
  const toThousand = (n) =>
    n ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "0";
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category && category.name}</td>
      <td>${toThousand(detail && detail.price)}</td>
      <td>{detail ? "$" + detail.discount : "s/n"}</td>
      <td>
        $
        {detail &&
          toThousand(
            detail.price - ((detail.price * detail.discount) / 100).toFixed(0)
          )}
      </td>
      
      <td>
        
        <div className="d-flex ">
          <button
            onClick={() => handleEditProduct(id)}
            className="btn btn-sm btn-outline-success rounded mr-3"
          >
            <FaPencilAlt />
          </button>
          <button
            onClick={() => handleDeleteProduct(id)}
            className="btn btn-sm btn-outline-danger rounded "
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

TableItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
    detail: PropTypes.shape({
      price: PropTypes.number,
      discount: PropTypes.number,
    }),
  }),
  handleEditProduct: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
};
