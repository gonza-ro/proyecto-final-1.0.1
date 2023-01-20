import express from "express";
import carritoRouter from "./carritoApi.js";
import { PRODU_DDBB } from '../../dist/services/ddbb.js';


const RouterProducto = express.Router();
// Router too contiene metodos : use, get, post, etc.
//Luego la metemos dentro de accountRouter


// es un midd. Aca entra en juego (next) --> es un CB
RouterProducto.use((req, res, next) =>{   // esta func se ejecuta antes que el end-point

/* console.log(req.ip) */

    next();
})

//--------------------------------------------------
// Obten detalles de una cuenta a partir de su ID. 
//Vamos a usar el Cliente Postman, para las peticiones http
RouterProducto.get("/:id", (req, res) => {   
    const { id } = req.params;
    const {idProduct} = PRODU_DDBB.find((e) => e.id === id);
    /* const {nameProduct} = PRODU_DDBB.find((us) => us.name === name); */
  
    if (!idProduct /* || !nameProduct */ ) {
      return res.status(404).send('Producto no encontrado');
    }
    return( res.send(idProduct), 'Producto encontrado'/* , res.send(nameProduct)  */);
    
  });
  
  //-------------------------------------------------
  // Crear una cuenta nueva, a partir de ID, y name
  RouterProducto.post("/", (req, res) => {
    const { id} = req.body;
    const {idProduct} = PRODU_DDBB.find((us) => us.id === id);
    const {nameProduct} = PRODU_DDBB.find((us) => us.name === name);
    if (!id || !name){
      return res.status(400).send('No existe');
      const newPro = { id:'' , name: ''}; 
      PRODU_DDBB.push(newPro);
      PRODU_DDBB.newPro.id = id;
      PRODU_DDBB.newPro.name = name;
      console.log( PRODU_DDBB.newPro);
    } else {
      console.log( PRODU_DDBB.newPro);
      return res.status(200).send('Ya existe');
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
  RouterProducto.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
   const product = PRODU_DDBB.find((pro) => pro.id === id);
    if (!product) {
      return res.status(400).send('No existe');
    } else if(product) {
      name = (`<input type="text" value="Ingrese nombre nuevo: " />`)
      product.name = name; // actualizo
  
      res.status(200).send(product);
    }
  
  /*   product.id = id; */
    return res.send('Actualizacion Confirmada'); //dev func
  });
  
  //-------------------------------------------------------
  // Eliminar un a cuenta
  RouterProducto.delete("/:id", (req, res) => {
    const { id } = req.params;
    const proIndex = PRODU_DDBB.findIndex((us) => us.id === id);
    // findIndex --> si encuentra = true. Si no = -1
    
    if (proIndex === -1) {
      return res.status(404).send('No existe');
    }
  
    PRODU_DDBB.splice(proIndex, 1); // aca borramos solo 1 usuario de la DB.
  
    return res.send('Producto borrado por ID'); // Esto nos dice de que todo ha salido bien
    // se tiene que mandar una res, para que no se quede tildado
  });
  
  
  export default RouterProducto;