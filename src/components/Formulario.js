import { useState } from "react";
// importamos useContext
import { useContext } from "react";
// importamos el archivo en el que hemos creado el contexto
import { GlobalContext } from "../context/Context";



export default function Formulario() {

    // accedemos a los componentes que están en App.js usando useContext.
    // ANTES
    // export default function Formulario({ setContactos })
    // DESPUÉS
    const { setContactos } = useContext(GlobalContext);
    // ---------------------------------------------

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [direccion, setDireccion] = useState("");
    const [provincia, setProvincia] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [telefono, setTelefono] = useState("");

    // apartado 7.1
    const handleSubmit = (evento) => {
        evento.preventDefault();

        // apartado 7.2 (Creamos un nuevo objeto)
        const nuevoContacto = {
            nombre: nombre,
            apellidos: apellidos,
            direccion: direccion,
            provincia: provincia,
            codigoPostal: codigoPostal,
            telefono: telefono,
        }

        // apartado 7.3 (Añadimos el nuevo contacto)
        setContactos(prevContactos => [...prevContactos, nuevoContacto]);

        // apartado 7.4 (Vaciamos el formulario)
        setNombre("");
        setApellidos("");
        setDireccion("");
        setProvincia("");
        setCodigoPostal("");
        setTelefono("");
    }

    const handleNombre = (evento) => {
        setNombre(evento.target.value);
    }

    const handleApellidos = (evento) => {
        setApellidos(evento.target.value);
    }

    const handleDireccion = (evento) => {
        setDireccion(evento.target.value);
    }

    const handleProvincia = (evento) => {
        setProvincia(evento.target.value);
    }

    const handleCodigoPostal = (evento) => {
        setCodigoPostal(evento.target.value);
    }

    const handleTelefono = (evento) => {
        setTelefono(evento.target.value);
    }

    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <h1>Nuevo contacto</h1>
            <input type="text" className="form-control mb-3" placeholder="Nombre" value={nombre} onChange={handleNombre} />
            <input type="text" className="form-control mb-3" placeholder="Apellidos" value={apellidos} onChange={handleApellidos} />
            <input type="text" className="form-control mb-3" placeholder="Dirección" value={direccion} onChange={handleDireccion} />
            <input type="text" className="form-control mb-3" placeholder="Provincia" value={provincia} onChange={handleProvincia} />
            <input type="text" className="form-control mb-3" placeholder="Código Postal" value={codigoPostal} onChange={handleCodigoPostal} />
            <input type="text" className="form-control mb-3" placeholder="Teléfono" value={telefono} onChange={handleTelefono} />
            <input type="submit" value="Añadir contacto" className="btn btn-success" />
        </form>
    )
}