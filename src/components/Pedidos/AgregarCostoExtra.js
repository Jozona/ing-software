import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";

function BtnAgregarCostoExtra() {
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
        Agregar costo extra
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Agregar costo extra</Modal.Title>
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
    </>
  );
}

export default BtnAgregarCostoExtra;
