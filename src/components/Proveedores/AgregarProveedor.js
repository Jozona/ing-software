import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";

function BtnAgregarProveedor() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., updating profile
    handleCloseModal();
  };

  return (
    <>
      <Button
        className="btn-fill pull-right"
        variant="info"
        onClick={handleShowModal}
      >
        Agregar proveedor
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Agregar proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Jose..." />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control type="email" placeholder="correo@correo.com" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col className="py-2">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control type="text" placeholder="Avenida..." />
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
    </>
  );
}

export default BtnAgregarProveedor;
