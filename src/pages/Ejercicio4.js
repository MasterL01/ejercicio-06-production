// ToDoList y NewToDo son los archivos en los que hemos hecho cambios.¡MIRAR!
import ToDoList from '../components/ToDoList';
import NewToDo from '../components/NewToDo';

function App() {
  return (
    <div className="App">
      {/* Eliminamos los props */}
      {/* ANTES */}
      {/* <NewToDo setToDos={setToDos} />
      <ToDoList setToDos={setToDos} toDos={toDos} /> */}
      {/* DESPUÉS */}
      <NewToDo />
      <ToDoList />
    </div>
  );
}

export default App;