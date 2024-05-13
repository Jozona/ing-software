import React, { useState } from "react";
import { Dropdown, Nav, Modal, Button, Form, Row, Col } from "react-bootstrap";

const EditarParteBtn = ({ onEditClick, item }) => {
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
          <Modal.Title>Agregar parte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Marca</Form.Label>
                  <Form.Control type="text" placeholder="Ford..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Modelo</Form.Label>
                  <Form.Control type="text" placeholder="IE3X" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="py-2">
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
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Nombre de la pieza</Form.Label>
                  <Form.Control type="text" placeholder="luces..." />
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
        <Modal.Body>¿Está seguro de que desea eliminar esta parte?</Modal.Body>
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

export default EditarParteBtn;
