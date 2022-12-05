import './App.css';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
// importamos GlobalContext, useEffect y useState
import { GlobalContext } from './context/Context';
import { useEffect, useState } from 'react';
// ----------------------------------------------
import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';



function App() {

  // cortamos y pegamos aquí todos los useState y useEffect que había en los ejercicios (los de la carpeta "pages")
  const [contactos, setContactos] = useState([

    { nombre: "John", apellidos: "Smith", direccion: "Calle compositor Hans Zimmer", provincia: "Badajoz", codigoPostal: "06003", telefono: "93568303049304" },
    { nombre: "Sara", apellidos: "Donovan", direccion: "Calle Ángel Ral", provincia: "Cáceres", codigoPostal: "90484", telefono: "89469304" },
    { nombre: "Miki", apellidos: "Ototo", direccion: "Calle Bacalao", provincia: "Málaga", codigoPostal: "56093", telefono: "4549304" },
  ]);

  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setToDos(data.slice(0, 20)));
  }, [])


  return (
    <BrowserRouter>
      <nav className="bg-dark py-3 d-flex justify-content-around">
        <NavLink to="/Ejercicio1" className="font-weight-bold text-light text-decoration-none">Ejercicio 1</NavLink>
        <NavLink to="/Ejercicio2" className="font-weight-bold text-light text-decoration-none">Ejercicio 2</NavLink>
        <NavLink to="/Ejercicio3" className="font-weight-bold text-light text-decoration-none">Ejercicio 3</NavLink>
        <NavLink to="/Ejercicio4" className="font-weight-bold text-light text-decoration-none">Ejercicio 4</NavLink>
      </nav>



    {/* englobamos las rutas o componentes que queremos que tengan disponible los useEffect y useState de arriba. */}

      {/* en value metemos las constantes y/o variables que estemos usando arriba */}
      <GlobalContext.Provider value={{contactos, setContactos, toDos, setToDos}}>
        <Routes>
          <Route path="/Ejercicio1" element={<Ejercicio1 />} />
          <Route path="/Ejercicio2" element={<Ejercicio2 />} />
          <Route path="/Ejercicio3" element={<Ejercicio3 />} />
          <Route path="/Ejercicio4" element={<Ejercicio4 />} />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;