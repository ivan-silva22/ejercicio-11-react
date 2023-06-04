import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';
import Footer from './components/Footer';



function App() {

  
  return (
    <section>
      <Titulo/>
      <Container>
        <Formulario/>
      </Container>
      <Footer/>
    </section>
  )
}

export default App
