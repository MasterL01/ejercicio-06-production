// tendremos un botón a la izquierda
// dos enlaces a la derecha
function Navbar() {
    return (
        <div className="mb-4 d-flex justify-content-between align-items-center bg-dark text-light">
            <div>
                <button className="m-3 btn btn-success">Botón</button>
            </div>
            <div className="m-3">
                <a href="">Enlace 1</a>
                <a href="">Enlace 2</a>
            </div>
        </div>
    );
}

export default Navbar;