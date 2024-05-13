import React, { useState } from "react";
import { Pagination, Modal, Button, Dropdown } from "react-bootstrap";
import BusquedaBoxClientes from "components/ComponentesSimples/BusquedaClientes";
import BtnAgregarCliente from "components/Clientes/AgregarClienteBtn";
import BtnAgregarPedido from "components/Pedidos/AgregarPedidoBtn";
import EditarPedidoBtn from "components/Pedidos/EditarPedidoBtn";
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
import BtnAgregarCostoExtra from "components/Pedidos/AgregarCostoExtra";
import EditarCostoExtra from "components/Pedidos/EditarCostoExtra";

function TableList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCE, setCurrentPageCE] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChangeCostoExtra = (pageNumber) => {
    setCurrentPageCE(pageNumber);
  };

  const getCurrentItems = (data) => {
    const filteredData = data.filter((item) =>
      item.cliente.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const getCurrentItemsCE = (data) => {
    const filteredData = data.filter((item) =>
      item.pedido.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const startIndex = (currentPageCE - 1) * itemsPerPage;
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
      cliente: "Dakota Rice",
      marca: "Ford",
      modelo: "1234XX",
      year: "2024",
      venta: "$00.00",
      pieza: "Puerta",
    },
    {
      id: 1,
      cliente: "Dakota Rice",
      marca: "Ford",
      modelo: "1234XX",
      year: "2024",
      venta: "$00.00",
      pieza: "Puerta",
    },
    {
      id: 1,
      cliente: "Dakota Rice",
      marca: "Ford",
      modelo: "1234XX",
      year: "2024",
      venta: "$00.00",
      pieza: "Puerta",
    },
    {
      id: 1,
      cliente: "Dakota Rice",
      marca: "Ford",
      modelo: "1234XX",
      year: "2024",
      venta: "$00.00",
      pieza: "Puerta",
    },
    {
      id: 1,
      cliente: "Dakota Rice",
      marca: "Ford",
      modelo: "1234XX",
      year: "2024",
      venta: "$00.00",
      pieza: "Puerta",
    },
    {
      id: 1,
      cliente: "Dakota Rice",
      marca: "Ford",
      modelo: "1234XX",
      year: "2024",
      venta: "$00.00",
      pieza: "Puerta",
    },
    {
      id: 1,
      cliente: "Dakota Rice",
      marca: "Ford",
      modelo: "1234XX",
      year: "2024",
      venta: "$00.00",
      pieza: "Puerta",
    },
  ];

  const dummyDataCostoExtra = [
    {
      id: 1,
      pedido: "1243",
      precio: "$0.00",
      proveedor: "Ford",
      gastos: "$00.00",
    },
    {
      id: 1,
      pedido: "1243",
      precio: "$0.00",
      proveedor: "Ford",
      gastos: "$00.00",
    },
    {
      id: 1,
      pedido: "1243",
      precio: "$0.00",
      proveedor: "Ford",
      gastos: "$00.00",
    },
    {
      id: 1,
      pedido: "1243",
      precio: "$0.00",
      proveedor: "Ford",
      gastos: "$00.00",
    },
    {
      id: 1,
      pedido: "1243",
      precio: "$0.00",
      proveedor: "Ford",
      gastos: "$00.00",
    },
    {
      id: 1,
      pedido: "1243",
      precio: "$0.00",
      proveedor: "Ford",
      gastos: "$00.00",
    },
  ];

  const currentItems = getCurrentItems(dummyData);
  const currentItemsCostoExtra = getCurrentItemsCE(dummyDataCostoExtra);

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
              <BtnAgregarPedido className="py-5"></BtnAgregarPedido>
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
                <Card.Title as="h4">Pedidos</Card.Title>
                <p className="card-category">
                  Lista de los pedidos en el sistema
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Cliente</th>
                      <th>Marca</th>
                      <th>Año</th>
                      <th>Nombre de la pieza</th>
                      <th>Precio de la venta</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.cliente}</td>
                        <td>{item.marca}</td>
                        <td>{item.year}</td>
                        <td>{item.pieza}</td>
                        <td>{item.venta}</td>
                        <td>
                          <EditarPedidoBtn
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
        <Row>
          <Col md="2">
            <Card className="strpied-tabled-with-hover">
              <BtnAgregarCostoExtra className="py-5"></BtnAgregarCostoExtra>
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
                <Card.Title as="h4">Costo extra</Card.Title>
                <p className="card-category">
                  Lista de los costos extra en el sistema
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Pedido</th>
                      <th>Precio de compra</th>
                      <th>Proveedor</th>
                      <th>Gastos</th>
                      <th>Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItemsCostoExtra.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.pedido}</td>
                        <td>{item.precio}</td>
                        <td>{item.proveedor}</td>
                        <td>{item.gastos}</td>
                        <td>
                          <EditarCostoExtra
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
                    ...Array(
                      Math.ceil(dummyDataCostoExtra.length / itemsPerPage)
                    ).keys(),
                  ].map((number) => (
                    <Pagination.Item
                      key={number + 1}
                      onClick={() => handlePageChangeCostoExtra(number + 1)}
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
