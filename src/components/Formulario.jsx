import { Form, Row, Col } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from 'react';

const Formulario = () => {
  const [noticia, setNoticia] = useState([]);
  

  useEffect(() =>{
    consultarAPI();
  },[])

  
  const consultarAPI = async () =>{
    try {
      const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_2390092fc495469faad8ab6bc874c9041a463&q=argentina&country=ar&language=es`);
      const datos = await respuesta.json();
      setNoticia(datos.results);
       
    } catch (error) {
      console.log(error)
    }
}

  const mostrarCategoria = async (categoria) =>{
    try {
      const respuesta = await fetch(`https://newsdata.io/api/1/news?apikey=pub_2390092fc495469faad8ab6bc874c9041a463&q=argentina&country=ar&language=es&category=${categoria}`);
      const datos = await respuesta.json();
      setNoticia(datos.results);
       
    } catch (error) {
      console.log(error)
    }
  }


  const handleSelectChange = (e) =>{
  console.log(e.target.value)
  mostrarCategoria(e.target.value);
}


  return (
    <>
    <Form>
      <Row>
        <Col md="3">
          <Form.Label>Buscar por categoría:</Form.Label>
        </Col>
        <Col>
          <Form.Select onChange={handleSelectChange}>
            <option value="">Seleccione una categoria</option>
            <option value="Top">General</option>
            <option value="world">Mundo</option>
            <option value="sports">Deportes</option>
            
          </Form.Select>
        </Col>
      </Row>
    </Form>
    <ListaNoticias noticia = {noticia}/>
    </>
    
  );
};

export default Formulario;
