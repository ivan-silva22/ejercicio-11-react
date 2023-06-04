import { Form, Row, Col } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";
import { useEffect, useState } from 'react';

const Formulario = () => {
  const [noticia, setNoticia] = useState([]);
  const [select, setSelect] = useState('');

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

  const handleSelectChange = (e) =>{
   setSelect(e.target.value)
   select.filter((categoria) =>{
    if(categoria === noticia.category){
      console.log(categoria.title);
    }
   })
  }


  return (
    <>
    <Form>
      <Row>
        <Col md="3">
          <Form.Label>Buscar por categoría:</Form.Label>
        </Col>
        <Col>
          <Form.Select value={select} onChange={handleSelectChange}>
            <option>Seleccione una opciones</option>
            <option value="noticia1">Deportes</option>
            <option value="noticia2">Noticia 2</option>
            <option value="noticia3">Noticia 3</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
    <ListaNoticias noticia = {noticia}/>
    </>
    
  );
};

export default Formulario;
