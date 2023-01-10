import express from "express";

import { USERS_DDBB } from '../ddbb.js';


const accountRouter = express.Router();
// Router too contiene metodos : use, get, post, etc.
//Luego la metemos dentro de accountRouter


// es un midd. Aca entra en juego (next) --> es un CB
accountRouter.use((req, res, next) =>{;   // esta func se ejecuta antes que el end-point
    console.log(req.ip)

    next();
})
//--------------------------------------------------
// Obten detalles de una cuenta a partir de su ID
accountRouter.get("/:_id", (req, res) => {
  const { _id } = req.params;
  const user = USERS_DDBB.find((us) => us._id === _id);

  if (!user) {
    return res.status(404).send();
  }

  return res.send(user);
});

//-------------------------------------------------
// Crear una cuenta nueva, a partir de ID, y name
accountRouter.post("/", (req, res) => {
  const { _id, name } = req.body;

  if (!_id || !name) {
    return res.status(400).send();
  }

  const user = USERS_DDBB.find((us) => us._id === _id);

  if (user) {
    return res.status(409).send();
  }
  // error de conflicto(409) : existe lo que quiero crear

  USERS_DDBB.push({
    _id,
    name,
  });

  return res.send(); //dev func
});

//--------------------------------------------------
// Actualizar una cuenta por su nombre
accountRouter.patch("/:_id", (req, res) => {
  const { _id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).send();
  }

  const user = USERS_DDBB.find((us) => us._id === _id);

  if (!user) {
    res.status(404).send();
  }

  user.name = name; // actualizo

  return res.send(); //dev func
});

//-------------------------------------------------------
// Eliminar un a cuenta
accountRouter.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  const userIndex = USERS_DDBB.findIndex((us) => us._id === _id);
  // findIndex --> si encuentra = true. Si no = -1
  
  if (userIndex === -1) {
    return res.status(404).send();
  }

  USERS_DDBB.splice(userIndex, 1); // aca borramos solo 1 usuario de la DB.

  return res.send(); // Esto nos dice de que todo ha salido bien
  // se tiene que mandar una res, para que no se quede tildado
});


export default accountRouter;