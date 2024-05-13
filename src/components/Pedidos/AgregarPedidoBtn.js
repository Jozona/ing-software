import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";

function BtnAgregarPedido() {
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
        Agregar pedido
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Agregar pedido</Modal.Title>
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
                  <Form.Label>Precio de venta</Form.Label>
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

export default BtnAgregarPedido;
