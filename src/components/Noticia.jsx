import { Card, Button, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";

const Noticia = ({ articulo }) => {
  
  return (
    <Col>
      <Card style={{ width: "18rem" }} className="mt-3 rounded shadow mx-auto">
        <Card.Img variant="top" src={articulo.image_url} title={articulo.title} />
        <Card.Body>
          <Card.Title>{articulo.title}</Card.Title>
          
          <Button variant="primary">Ver noticia</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Noticia.propTypes = {
  articulo: PropTypes.arrayOf(PropTypes.string),
};

export default Noticia;
