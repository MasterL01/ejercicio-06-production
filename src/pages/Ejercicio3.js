import '../App.css'
// Agenda y Formulario son los archivos en los que hemos hecho cambios.¡MIRAR!
import Agenda from '../components/Agenda'
import Formulario from '../components/Formulario'


function App() {

  return (
    <div className="container">
      {/* Eliminamos los props */}
      {/* ANTES */}
      {/* <Agenda contactos={contactos} setContactos={setContactos}/>
      <Formulario setContactos={setContactos}/> */}
      {/* DESPUÉS */}
      <Agenda />
      <Formulario />
    </div>
  );
}

export default App;