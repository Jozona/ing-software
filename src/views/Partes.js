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
import BtnAgregarParte from "components/Partes/AgregarParteBtn";
import EditarParteBtn from "components/Partes/EditarParteBtn";

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
      item.pieza.toLowerCase().includes(searchQuery.toLowerCase())
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
      marca: "Tesla",
      modelo: "TIA4",
      año: "2024",
      pieza: "Puerta",
    },
    {
      id: 1,
      marca: "Tesla",
      modelo: "TIA4",
      año: "2024",
      pieza: "Puerta",
    },
    {
      id: 1,
      marca: "Tesla",
      modelo: "TIA4",
      año: "2024",
      pieza: "Puerta",
    },
    {
      id: 1,
      marca: "Tesla",
      modelo: "TIA4",
      año: "2024",
      pieza: "Puerta",
    },
    {
      id: 1,
      marca: "Tesla",
      modelo: "TIA4",
      año: "2024",
      pieza: "Puerta",
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
              <BtnAgregarParte className="py-5"></BtnAgregarParte>
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
                <Card.Title as="h4">Partes</Card.Title>
                <p className="card-category">
                  Lista de las partes en el sistema
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Marca</th>
                      <th>Modelo</th>
                      <th>Año</th>
                      <th>Nombre de la pieza</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.marca}</td>
                        <td>{item.modelo}</td>
                        <td>{item.año}</td>
                        <td>{item.pieza}</td>
                        <td>
                          <EditarParteBtn
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
