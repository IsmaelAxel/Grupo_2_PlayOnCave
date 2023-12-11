import {
  Card,CardBody,CardHeader,CardTitle,Col,Row,Table,
} from "react-bootstrap";

import { useEffect, useState } from "react";

import { TableItem } from "../component/TableItem";
import { Loading } from "../component/Loading";


export const ListProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const getProducts = async (endpoint = "/api/products") => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000${endpoint}`);
      const result = await response.json();
      setLoading(false);
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
 
 

  return (
    <Row className="admin">
      <Col sm={12} lg={4}>
        <Card className=" shadow-lg bg-dark text-white">
          <CardHeader className=" shadow-lg bg-dark ">
            <CardTitle> Productos: </CardTitle>
          </CardHeader>
         
        </Card>
      </Col>
      <Col sm={12} lg={8}>
        <Card className=" shadow-lg bg-dark ">
          <CardBody>
            <CardHeader className="d-flex shadow-lg bg-dark justify-content-between">
             
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
                  {products.map((product) => (
                    <TableItem
                      key={product.id}
                      product={product}
                    
                    />
                  ))}
                </tbody>
              </Table>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
