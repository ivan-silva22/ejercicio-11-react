import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';

function App() {
  

  return (
    <section>
      <Titulo/>
      <Container>
        <Formulario/>
        <ListaNoticias/>
      </Container>
    </section>
  )
}

export default App
