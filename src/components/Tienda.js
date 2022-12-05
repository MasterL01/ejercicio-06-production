import Lista from "./Lista";
import Navbar from "./Navbar";
import Table from "./Table";

function Tienda() {
  
const tienda = {
  electronica: [
    { id: 27, producto: "Televisor", marca: "LG", modelo: "XP7302", precio: 399 },
    { id: 28, producto: "Receptor AV", marca: "Denon", modelo: "73ATR02", precio: 675 },
    { id: 29, producto: "Panificadora", marca: "Paneto", modelo: "R9wind-Z3", precio: 235 }
  ],

  alimentacion: [
    { id: 30, producto: "Leche condensada", marca: "La Lechera", precio: 1.54 },
    { id: 31, producto: "Ensalada", marca: "LoGüeno", precio: 0.99 },
    { id: 32, producto: "Pasta", marca: "Boni", precio: 2.39 },
  ],

  mascotas: [
    { id: 33, producto: "Croquetas para gato", marca: "Purina", precio: 4.90 },
    { id: 34, producto: "Arena de gato", marca: "Limpito", precio: 1.10 },
    { id: 35, producto: "Chuches de perrete", marca: "Chachi Chuches", precio: 1.69 },
  ]
};

  return (
    <div className="row justify-content-between">
      {/* Renderizamos tres veces */}
      <Navbar />
      <Lista categoria="Electrónica" productos={tienda.electronica} />
      <Lista categoria="Alimentación" productos={tienda.alimentacion} />
      <Lista categoria="Mascotas" productos={tienda.mascotas} />
      <Table productos={tienda.electronica} />
      <Table productos={tienda.alimentacion} />
      <Table productos={tienda.mascotas} />
    </div>
  );
}

export { Tienda };