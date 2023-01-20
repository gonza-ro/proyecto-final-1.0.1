import express from "express";

import { PRODU_DDBB } from "../../dist/services/ddbb.js";

const carritoRouter = express.Router();
// Router too contiene metodos : use, get, post, etc.
//Luego la metemos dentro de accountRouter

// es un midd. Aca entra en juego (next) --> es un CB
carritoRouter.use((req, res, next) => {
  // esta func se ejecuta antes que el end-point

  //* console.log(req.ip) */

  next();
});

//----------------------------------------------------------------------

//--------------- CLASE CARRITO ---------------
export class Carrito {
  constructor() {
    let id = 0;
    let carritos = [];
    /* PRODU_DDBB.forEach(ele => console.log(ele)); */
  }

  listar(id) {
    this.id = this.carritos.find((car) => car.id == id);
    console.log("El Id ingresado por parametro --> " + id);
    return id || { error: "No se encuentra el carrito" };
  }

  listarAll() {
    /*  this.carri = PRODU_DDBB.forEach(ele => console.log(ele)); */
    console.log(this.carritos);
    return this.carritos
      ? this.carritos
      : { error: "No hay carritos cargados" };
  }

  guardar(carro) {
    carro.id = ++this.id;
    this.carritos.push(carro);
  }

  actualizar(carro, id) {
    carro.id = Number(id);
    let index = this.carritos.findIndex((carr) => carr.id == id);
    this.carritos.splice(index, 1, carro);
  }

  borrar(id) {
    let index = this.carritos.findIndex((carr) => carr.id == id);
    return this.carritos.splice(index, 1);
  }
}

//--------------------------------------------------
// Obten detalles de una cuenta a partir de su ID
carritoRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = PRODU_DDBB.find((us) => us.id === id);

  if (!product) {
    return res.status(404).send("Producto no encontrado");
  }

  return res.send(product);
});

//-------------------------------------------------
// Crear una cuenta nueva, a partir de ID, y name
carritoRouter.post("/", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).send("No existe");
  }

  const product = PRODU_DDBB.find((us) => us.id === id);

  if (product) {
    return res.status(409).send("Ya existe el producto");
  }
  // error de conflicto(409) : existe lo que quiero crear

  PRODU_DDBB.push({
    id,
    name,
  });

  return res.send(); //dev func
});

//--------------------------------------------------
// Actualizar una cuenta por su nombre
carritoRouter.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).send();
  }

  const product = PRODU_DDBB.find((us) => us.id === id);

  if (!product) {
    res.status(404).send();
  }

  product.name = name; // actualizo

  return res.send(); //dev func
});

//-------------------------------------------------------
// Eliminar un a cuenta
carritoRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const proIndex = PRODU_DDBB.findIndex((us) => us.id === id);
  // findIndex --> si encuentra = true. Si no = -1

  if (proIndex === -1) {
    return res.status(404).send();
  }

  PRODU_DDBB.splice(proIndex, 1); // aca borramos solo 1 usuario de la DB.

  return res.send(); // Esto nos dice de que todo ha salido bien
  // se tiene que mandar una res, para que no se quede tildado
});

export default carritoRouter;
