import express from "express";

import { PRODU_DDBB } from '../ddbb.js';


const accountRouter = express.Router();
// Router too contiene metodos : use, get, post, etc.
//Luego la metemos dentro de accountRouter


// es un midd. Aca entra en juego (next) --> es un CB
accountRouter.use((req, res, next) =>{;   // esta func se ejecuta antes que el end-point
     
//* console.log(req.ip) */

    next();
})
//--------------------------------------------------
// Obten detalles de una cuenta a partir de su ID
accountRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = PRODU_DDBB.find((us) => us.id === id);

  if (!product) {
    return res.status(404).send('Producto no encontrado');
  }

  return res.send(product);
});

//-------------------------------------------------
// Crear una cuenta nueva, a partir de ID, y name
accountRouter.post("/", (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).send('No existe');
  }

  const product = PRODU_DDBB.find((us) => us.id === id);

  if (product) {
    return res.status(409).send('Ya existe el producto');
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
accountRouter.patch("/:id", (req, res) => {
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
accountRouter.delete("/:id", (req, res) => {
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


export default accountRouter;