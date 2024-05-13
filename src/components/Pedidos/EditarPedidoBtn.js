import React, { useState } from "react";
import { Dropdown, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap";

const EditarPedidoBtn = ({ onEditClick, item }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleButtonClick = () => {
    console.log(item);
    setShowModal(true);
    if (onEditClick) {
      onEditClick();
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteConfirmation = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    // Add logic to handle delete confirmation
    setShowDeleteConfirmation(false);
    // Perform delete action
    handleCloseModal(); // Close main modal after deletion
  };

  const handleCloseDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., updating profile
    handleCloseModal();
  };

  const EditarClienteBtn = ({ onEditClick, item }) => {
    // Use the item information here
  };

  return (
    <>
      <Dropdown as={Nav.Item}>
        <Dropdown.Toggle
          as={Nav.Link}
          data-toggle="dropdown"
          id="dropdown-67443507"
          variant="default"
          className="m-0"
        >
          <i className="nc-icon nc-settings-gear-64"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleButtonClick}>Editar</Dropdown.Item>
          <Dropdown.Item onClick={handleDeleteConfirmation}>
            Eliminar
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Main Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Editar pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Cliente</Form.Label>
                  <Form.Control as="select">
                    <option value="">Select...</option>
                    <option value="electronic">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Nombre de pieza</Form.Label>
                  <Form.Control type="email" placeholder="Pieza..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Precio venta</Form.Label>
                  <Form.Control type="number" placeholder="$0.00" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Año</Form.Label>
                  <Form.Control
                    type="number"
                    min="1900"
                    max="2100"
                    step="1"
                    defaultValue="2024"
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Marca</Form.Label>
                  <Form.Control type="email" placeholder="Chvr..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Modelo</Form.Label>
                  <Form.Control type="email" placeholder="AXZ..." />
                </Form.Group>
              </Col>
            </Row>

            <br></br>
            <Row>
              <Col>
                <Button variant="primary" type="submit" className="mr-3">
                  Editar
                </Button>

                <Button variant="secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        show={showDeleteConfirmation}
        onHide={handleCloseDeleteConfirmation}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro de que desea eliminar este pedido?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Eliminar
          </Button>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmation}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditarPedidoBtn;
