import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";

function BtnAgregarParte() {
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
        Agregar parte
      </Button>

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
    </>
  );
}

export default BtnAgregarParte;
