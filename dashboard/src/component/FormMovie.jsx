/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { validate } from "./../validations/formMoviesValidation";

export const FormMovie = ({
  handleAddProduct,
  handleUpdateProduct,
  product,
  setProduct,
}) => {
  const [producto, setProducto] = useState([]);

  const getProducts = async (endpoint = "/api/products") => {
    let response = await fetch(`http://localhost:3000${endpoint}`);
    const result = await response.json();
    setProducto(result);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (product) {
      formik.setValues({
        title: product.title || "",
        price: product.price || 0,
        discount: product.discount || 0,
        category: product.category?.name || "",
        description: product.description || "",
      });
    }
  }, [product]);

  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      discount: 0,
      category: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      product
        ? handleUpdateProduct(product.id, values)
        : handleAddProduct(values);
      formik.handleReset();
    },
  });

  const handleFormReset = () => {
    setProduct(null);
    formik.handleReset();
  };

  return (
    <>
      <Form className="row" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3 col-12">
          <Form.Label htmlFor="title">Título</Form.Label>
          <Form.Control
            style={{ color: "black" }}
            type="text"
            placeholder="Título del producto..."
            name="title"
            id="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title && (
            <small className="ms-2 text-danger bold">
              {formik.errors.title}
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="price">Price</Form.Label>
          <Form.Control
            type="number"
            style={{ color: "black" }}
            name="price"
            id="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price && (
            <small className="ms-2 text-danger bold">
              {formik.errors.price}
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3 col-12 col-md-6">
          <Form.Label htmlFor="discount">Discount</Form.Label>
          <Form.Control
            type="number"
            style={{ color: "black" }}
            name="discount"
            id="discount"
            onChange={formik.handleChange}
            value={formik.values.discount}
          />
          {formik.errors.discount && (
            <small className="ms-2 text-danger bold">
              {formik.errors.discount}
            </small>
          )}
        </Form.Group>

        <Form.Group className="mb-3 col-12 ">
          <Form.Label htmlFor="category">Categoria </Form.Label>
          <Form.Select
            className="form-control"
            name="category"
            id="category"
            onChange={formik.handleChange}
            value={formik.values.category}
          >
            <option hidden defaultChecked>
              Seleccione la categoria...
            </option>
            {Array.isArray(producto.products) &&
              producto.products.map((product) => (
                <option key={product.id} value={product.category?.name}>
                  {product.category?.name}
                </option>
              ))}
          </Form.Select>
          {formik.errors.category && (
            <small className="ms-2 text-danger bold">
              {formik.errors.category}
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3 col-12">
          <Form.Label htmlFor="title">Description</Form.Label>
          <Form.Control
            style={{ color: "black" }}
            type="text"
            placeholder="Description del producto..."
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.errors.description && (
            <small className="ms-2 text-danger bold">
              {formik.errors.descriptiontitle}
            </small>
          )}
        </Form.Group>
        <Form.Group className="mb-3 col-12 ">
          <div className="d-flex justify-content-between">
            <Button
              onClick={handleFormReset}
              type="submit"
              variant="outline-secondary"
              className="w-100"
            >
              Cancelar
            </Button>
            <Button type="submit" variant="outline-light" className="w-100">
              Guardar
            </Button>
          </div>
        </Form.Group>
      </Form>
    </>
  );
};

FormMovie.propTypes = {
  handleAddProduct: PropTypes.func,
  product: PropTypes.object,
  setProduct: PropTypes.func,
  handleUpdateProduct: PropTypes.func,
};
