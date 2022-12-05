// importamos useContext
import { useContext } from "react";
// importamos el archivo en el que hemos creado el contexto
import { GlobalContext } from "../context/Context";

// ANTES
// function ToDoList({ toDos, setToDos }) {
// DESPUÉS
function ToDoList() {
    const {toDos, setToDos} = useContext(GlobalContext);
//-------------------------------------------------

    const removeToDo = (title) => {
        setToDos(toDos.filter(toDo => toDo.title !== title));
    };

    // 4.4 Creamos un toggle sobre completed
    const toggleToDo = (index) => {
        const newToDos = [...toDos];
        newToDos[index].completed = !newToDos[index].completed;
        setToDos(newToDos);
    };

    // en el index.css añadimos los estilos de completed para que al hacer click se tache esa fila
    return (
        <ul className="list-group container">
            {toDos.map(({ title, completed }, index) => {
                return (
                    // quitamos error de "Each child..." con un key
                    <li key={title} className={`list-group-item ${completed && "completed"}`}>
                        <div className="row">
                            <div className="col-11" onClick={() => toggleToDo(index)}>
                                <span className={completed ? "completed" : ""}>To-Do {index}: <strong>{title}</strong></span>
                            </div>
                            <div className="col-1">
                                <button className="btn btn-danger" onClick={() => removeToDo(title)}>X</button>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default ToDoList;