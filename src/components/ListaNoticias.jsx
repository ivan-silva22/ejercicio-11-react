import { PropTypes } from "prop-types";
import Noticia from "./Noticia";
import { Row, Container } from "react-bootstrap";

const ListaNoticias = ({ noticia }) => {
  return (
    <Container className="mt-5" fluid="md">
      <Row>
        {noticia.map((articulo, indice) => (
            <Noticia articulo={articulo} key={indice} />
        ))}
      </Row>
    </Container>
  );
};

ListaNoticias.propTypes = {
  noticia: PropTypes.arrayOf(PropTypes.string),
};

export default ListaNoticias;
