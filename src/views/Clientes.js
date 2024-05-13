import React, { useState } from "react";
import { Pagination, Modal, Button, Dropdown } from "react-bootstrap";
import BusquedaBoxClientes from "components/ComponentesSimples/BusquedaClientes";
import BtnAgregarCliente from "components/Clientes/AgregarClienteBtn";
import {
  Badge,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import EditarClienteBtn from "components/Clientes/EditarClienteBtn";

function TableList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCurrentItems = (data) => {
    const filteredData = data.filter((item) =>
      item.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
    console.log(currentItems);
  };

  const dummyData = [
    {
      id: 1,
      nombre: "Dakota Rice",
      correo: "correo@correo.com",
      telefono: "(000) 000-0000",
    },
    {
      id: 2,
      nombre: "Dakota Rice",
      correo: "correo@correo.com",
      telefono: "(000) 000-0000",
    },
    {
      id: 3,
      nombre: "Dakota Rice",
      correo: "correo@correo.com",
      telefono: "(000) 000-0000",
    },
    {
      id: 4,
      nombre: "Dakota Rice",
      correo: "correo@correo.com",
      telefono: "(000) 000-0000",
    },
    {
      id: 5,
      nombre: "Dakota Rice",
      correo: "correo@correo.com",
      telefono: "(000) 000-0000",
    },
    {
      id: 6,
      nombre: "Dakota Rice",
      correo: "correo@correo.com",
      telefono: "(000) 000-0000",
    },
    {
      id: 7,
      nombre: "Dakota Rice",
      correo: "correo@correo.com",
      telefono: "(000) 000-0000",
    },
  ];

  const currentItems = getCurrentItems(dummyData);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="2">
            <Card className="strpied-tabled-with-hover">
              <BtnAgregarCliente className="py-5"></BtnAgregarCliente>
            </Card>
          </Col>

          <Col md="5">
            <Card className="strpied-tabled-with-hover">
              <BusquedaBoxClientes onChange={handleSearchChange} />
            </Card>
          </Col>

          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Clientes</Card.Title>
                <p className="card-category">
                  Lista de los clientes en el sistema
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Correo</th>
                      <th>Telefono</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nombre}</td>
                        <td>{item.correo}</td>
                        <td>{item.telefono}</td>
                        <td>
                          <EditarClienteBtn
                            onEditClick={handleEditClick}
                            item={item}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Pagination className="px-2">
                  {[
                    ...Array(Math.ceil(dummyData.length / itemsPerPage)).keys(),
                  ].map((number) => (
                    <Pagination.Item
                      key={number + 1}
                      onClick={() => handlePageChange(number + 1)}
                      className="custom-pagination-item"
                    >
                      {number + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
