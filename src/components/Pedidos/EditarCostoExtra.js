import React, { useState } from "react";
import { Dropdown, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap";

const EditarCostoExtra = ({ onEditClick, item }) => {
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
          <Modal.Title>Editar costo extra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Pedido</Form.Label>
                  <Form.Control as="select">
                    <option value="">Escoge...</option>
                    <option value="electronic">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                    {/* Add more options as needed */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Precio compra</Form.Label>

                  <Form.Control type="number" placeholder="$0.00" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Proveedor</Form.Label>
                  <Form.Control type="text" placeholder="Pieza..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Gastos</Form.Label>
                  <Form.Control type="number" placeholder="$0.00" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Razon del gasto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Se necesitaba nueva...."
                  />
                </Form.Group>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Button variant="primary" type="submit" className="mr-3">
                  Agregar
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
        <Modal.Body>¿Está seguro de que desea eliminar este costo?</Modal.Body>
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

export default EditarCostoExtra;
