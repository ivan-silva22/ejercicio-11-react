import { Form, Row, Col } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form>
      <Row>
        <Col md="3">
          <Form.Label>Buscar por categoría:</Form.Label>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Seleccione una opciones</option>
            <option value="notocia1">Noticia 1</option>
            <option value="noticia2">Noticia 2</option>
            <option value="noticia3">Noticia 3</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
