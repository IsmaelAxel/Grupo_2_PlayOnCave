import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from "react-bootstrap";

import { useEffect, useState } from "react";

import { TableItem } from "../component/TableItem";
import { Loading } from "../component/Loading";

import { FormSearch } from "../component/FormSearch";
import { Paginator } from "../component/Paginator";
/* import { SweetAlertToast } from "../component/SweetAlertToast";
import Swal from "sweetalert2"; */
// import { FormMovie } from "../component/FormMovie";

export const ListProductsPage = () => {
  // const [product, setProduct] = useState([]);
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

  // const handleAddProduct = async (data, endpoint = "/api/products") => {
  //   try {
  //     const response = await fetch(`http://localhost:3000${endpoint}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const result = await response.json();
      
  //     if (response.ok) {
        
  //       SweetAlertToast(result.message)
  //     }else{
  //       console.error(`Error: ${response.status} - ${response.statusText}`);
  //       SweetAlertToast(result.message, "error");
  //     }
       

  //     getProducts();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const handleEditProduct = async (id, endpoint = "/api/products") => {
  //   try {
  //     const response = await fetch(`http://localhost:3000${endpoint}/${id}`);
  //     const result = await response.json();
  //       setLoading(true);
  //       setProduct(result.data);
  //       setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleUpdateProduct = async (id, detail, endpoint = "/api/products") => {
  //   try {
  //     if (!id) {
  //       console.error("ID is undefined. Cannot update product.");
  //       return handleAddProduct(detail, endpoint);
  //     }
  
  //     const response = await fetch(`http://localhost:3000${endpoint}/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(detail),
  //     });
  //     const result = await response.json();
  
  //     if (response.ok) {
  //       SweetAlertToast(result.message);
  //       setProducts(
  //         products.map((product) => (product.id === id ? result.data : products))
  //       );
  //       setProduct(null);
  //     } else {
  //       console.error(`Error: ${response.status} - ${response.statusText}`);
  //       SweetAlertToast(result.message, "error");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  

  // const handleDeleteProduct = async (id, endpoint = "/api/products") => {
  //   Swal.fire({
  //     title: "Are you sure you want to delete the product?",
  //     showDenyButton: true,
  //     confirmButtonText: "Delete",
  //     denyButtonText: `Don't Delete`,
  //   }).then(async (result) => {
  //     if (result.isConfirmed) {
  //       try {
  //         const response = await fetch(
  //           `http://localhost:3000${endpoint}/${id}`,
  //           {
  //             method: "DELETE",
  //           }
  //         );
  //         const result = await response.json();
          
  //         if (response.ok) {
  //           SweetAlertToast(result.message);
  //           setProducts(products.filter((product) => product.id !== id));
  //         } else {
  //           SweetAlertToast(result.message, "error");
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
  // };

  return loading ? (
    <Loading />
  ) : (

    <Row className="admin">
      {/* <Col sm={12} lg={4}>
        <Card className=" shadow-lg bg-dark text-white">
          <CardHeader className=" shadow-lg bg-dark ">
          <Card.Title> {product ? "Edit" : "Add"} Product</Card.Title>
          </CardHeader>
          <CardBody>
            <FormMovie
              product={product}
              setProduct={setProduct}
              handleAddProduct={handleAddProduct}
              handleUpdateProduct={handleUpdateProduct}
            />
          </CardBody>
        </Card>
      </Col> */}
      <Col sm={12} lg={12}>
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
           
              <Table striped bordered className="text-white" responsive>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Decuento</th>
                    <th scope="col">P. Final</th>
                    {/* <th scope="col">Acciones</th> */}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(products) && products.length > 0 ? (
                    products.map((product) => (
                      <TableItem
                        key={product.id}
                        product={product}
                       /*  handleEditProduct={handleEditProduct}
                        handleDeleteProduct={handleDeleteProduct} */
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">No hay productos</td>
                    </tr>
                  )}
                </tbody>
              </Table>
           
          </CardBody>
        </Card>
      </Col>
    </Row>
     )}
