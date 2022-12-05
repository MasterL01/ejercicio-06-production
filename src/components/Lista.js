function Lista(props) {
    return (
      <div>
        <h1 >{props.categoria}</h1>
        <ul style={{backgroundColor: "grey"}}>
          {
            // la función de flecha sustituye al return
            props.productos.map(producto => 
              <li key={producto.id} style={{color: "blue"}}>
                {producto.id} {producto.producto} {producto.marca && producto.marca} {producto.modelo} {producto.precio}</li>
              // producto.marca && producto.marca lo hacemos así porque no todos los departamentos tienen el apartado "modelo". Si lo primero es verdadero, me devuelve lo segundo. Y si no existe, será falso y no hará nada.
            )
          }
        </ul>
      </div>
    );
  }

export default Lista;