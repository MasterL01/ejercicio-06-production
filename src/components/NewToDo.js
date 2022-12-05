import { useState } from 'react';
// importamos useContext
import { useContext } from "react";
// importamos el archivo en el que hemos creado el contexto
import { GlobalContext } from "../context/Context";

//ANTES
// function NewToDo({setToDos}){
// DESPUÉS
function NewToDo(){
    const {setToDos} = useContext(GlobalContext);
// -------------------------------------------------

    const [newToDo, setNewToDo] = useState("");


    const handleSubmit = (e)=>{
        e.preventDefault();
        
        const obj = {title: newToDo, completed: false};
        setToDos(prevToDos => [obj, ...prevToDos]);

        // Vaciamos el input
        setNewToDo("");
    }

    const handleNewToDo = (evento)=> setNewToDo(evento.target.value);

    return(
        <form onSubmit={handleSubmit} className="form-group container">
            <h1 className="my-4">To do List</h1>
            <input
                className="form-control mb-3"
                type="text"
                value={newToDo}
                placeholder="Introduce un nuevo To-do"
                onChange={handleNewToDo}
            />
        </form>
    )
}

export default NewToDo;