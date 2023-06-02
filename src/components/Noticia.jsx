import { Col, Card, CardImg, Button } from "react-bootstrap";

const Noticia = () => {
  return (
    <Col>
      <Card>
        <CardImg variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="primary">Ver noticia</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Noticia;
