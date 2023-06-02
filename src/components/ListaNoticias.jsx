import { Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = () => {
    return (
        <Row className="mt-5">
            <Noticia/>
            <Noticia/>
            <Noticia/>
        </Row>
    );
};

export default ListaNoticias;