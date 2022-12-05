//la tabla tendrá tantas filas como objetos tengamos
//tantas columnas como atributos de estos objetos
//en el tbody habrá que hacer un map
function Table(props) {

    return (
        <div>
            <table className="table table-dark">{props.categoria}

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.productos.map(producto =>
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.producto} </td>
                                <td>{producto.marca && producto.marca} </td>
                                <td>{producto.modelo} </td>
                                <td>{producto.precio}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;