// importamos useContext
import { useContext } from "react";
// importamos el archivo en el que hemos creado el contexto
import { GlobalContext } from "../context/Context";



export default function Agenda() {

    // accedemos a los componentes que están en App.js usando useContext.
    // ANTES
    // export default function Agenda({ contactos, setContactos })
    // DESPUÉS
    const { contactos, setContactos } = useContext(GlobalContext);
    // ---------------------------------------------
    
    const removeContact = (evento, telefono) => {
        setContactos(prevContactos => prevContactos.filter(contacto => contacto.telefono !== telefono));
    };

    return (
        <>
            <h1>Agenda - Lista de contactos</h1>
            <div className="row">
                {
                    contactos.map((contacto, index) => {
                        return (
                            <ul key={contacto.telefono} className="col-6 list-group mb-4">
                                <li className="list-group-item active">Contacto {index}</li>
                                <li className="list-group-item">{contacto.nombre}</li>
                                <li className="list-group-item">{contacto.apellidos}</li>
                                <li className="list-group-item">{contacto.direccion}, {contacto.provincia}, {contacto.codigoPostal}</li>
                                <li className="list-group-item">{contacto.telefono}</li>
                                <li className="list-group-item">
                                    <button className="btn btn-warning"
                                        onClick={(evento) => removeContact(evento, contacto.telefono)}>
                                        Eliminar
                                    </button>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}