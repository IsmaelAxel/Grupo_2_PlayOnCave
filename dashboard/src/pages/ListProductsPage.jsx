import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from "react-bootstrap";

import { useEffect, useState } from "react";

import { TableItem } from "../component/TableItem";
import { Loading } from "../component/Loading";
import { FormMovie } from "../component/FormMovie";
import { FormSearch } from "../component/FormSearch";
import { Paginator } from "../component/Paginator";

export const ListProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    pagesCount: 0,
    pages: [],
    currentPage: 1,
  });

  const getProducts = async (endpoint = "/api/products") => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000${endpoint}`);
      const result = await response.json();
      setLoading(false);

      setPagination(result.meta);
      const productsWithDetails = await Promise.all(
        result.products.map(async (product) => {
          const detailResponse = await fetch(product.detail);
          const detailResult = await detailResponse.json();
          return { ...product, detail: detailResult.data };
        })
      );

      setProducts(productsWithDetails);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handlePagination = async (endpoint) => {
    getProducts(endpoint);
  };
  const handlePrevPage = () => {
    if (pagination.currentPage > 1) {
      handlePagination(`/api/products?page=${pagination.currentPage - 1}`);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.pagesCount) {
      handlePagination(`/api/products?page=${pagination.currentPage + 1}`);
    }
  };

  return (
    <Row className="admin">
      <Col sm={12} lg={4}>
        <Card className=" shadow-lg bg-dark text-white">
          <CardHeader className=" shadow-lg bg-dark ">
            <CardTitle> Productos: </CardTitle>
          </CardHeader>
          <CardBody>
            <FormMovie />
          </CardBody>
        </Card>
      </Col>
      <Col sm={12} lg={8}>
        <Card className=" shadow-lg bg-dark ">
          <CardBody>
            <CardHeader className="d-flex shadow-lg bg-dark justify-content-between">
              <FormSearch getProducts={getProducts} />
              <Paginator
                pagination={pagination}
                handleNextPage={handleNextPage}
                handlePagination={handlePagination}
                handlePrevPage={handlePrevPage}
              />
            </CardHeader>
            {loading ? (
              <Loading />
            ) : (
              <Table striped bordered className="text-white" responsive>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Decuento</th>
                    <th scope="col">P. Final</th>
                    <th scope="col">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                      <TableItem key={product.id} product={product} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">No hay productos</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
