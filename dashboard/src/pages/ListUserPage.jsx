/* eslint-disable react-hooks/exhaustive-deps */
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

import { Loading } from "../component/Loading";

import { FormSearch } from "../component/FormSearch";
import { Paginator } from "../component/Paginator";
import { TableItemUser } from "../component/TableItemUser";

export const ListUserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    pagesCount: 0,
    pages: [],
    currentPage: 1,
  });

  const getUsers = async (endpoint = "/api/users") => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000${endpoint}`);
      const result = await response.json();
      setLoading(false);
      setPagination(result.meta);
      setUsers(result.users);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handlePagination = async (endpoint) => {
    getUsers(endpoint);
  };
  const handlePrevPage = () => {
    if (pagination.currentPage > 1) {
      handlePagination(`/api/users?page=${pagination.currentPage - 1}`);
    }
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.pagesCount) {
      handlePagination(`/api/users?page=${pagination.currentPage + 1}`);
    }
  };

  return (
    <Row className="admin">
      
      <Col sm={12} lg={12}>
        <Card className=" shadow-lg bg-dark" >
          <CardHeader className=" shadow-lg bg-dark d-flex justify-content-between" >
            <CardTitle className="text-white"> Users: </CardTitle>
            <FormSearch getUsers={getUsers} />
              <Paginator
                pagination={pagination}
                handleNextPage={handleNextPage}
                handlePagination={handlePagination}
                handlePrevPage={handlePrevPage}
              />
          </CardHeader>
          <CardBody>
            
            {loading ? (
              <Loading />
            ) : (
              <Table striped bordered className="text-white" responsive>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(users) && users.length > 0 ? (
                    users.map((users) => (
                      <TableItemUser key={users.id} users={users} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">No hay usuarios</td>
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
