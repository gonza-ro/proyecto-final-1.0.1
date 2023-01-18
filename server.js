console.clear();
import express from 'express';
import dotenv from 'dotenv';
import RouterProducto from './routers/productos.js';  // aca lo meto como un midd
import accountRouter from './routers/carritos.js';
import { Server } from 'socket.io';




const App = express();
//--------------------------------------------------

//------------- Middleware -----------
App.use(express.static('public'))  
// me permite cargar archivos y contenido desde el diresctorios public


App.use(express.urlencoded({extended: true}))    
 // con esto podemos entender y recibir datos desde un formulario, proveniente de una page html

/* const router = express.Router();  */
// router de express.Ayuda a crear manejadores de rutas encadenables

App.use(express.json())  // --> para entender el body en formato JSON

App.use(express.text());  // ---> para entender el body en formato text 

App.use(accountRouter);
App.use(RouterProducto);
//---------------------------------------------------





// para usar el archivo ( .env ), instalamos la dependencia DOTENV --> en consola
//process.env.port  //--> al importarla, ya no necesito el procces --> este es global
const PORT = dotenv.PORT || 8080

App.listen(PORT, () => { console.log(`Server on, in port : ${PORT}`)  });
 

    //---------------------------------------------------------------


    //------------ HTTP server ---------------
   /*  console.clear();
    import { createServer } from 'http';

    const httpServer = createServer(( req, res ) =>{  
        ---------------------------
        aca podemos elegir por metodo de entrada que vamos a hacer
        console.log(req.method) --> me devuelve que pet está entrando y too 
        console.log(req.url) --> me devuelve la ruta a la carpeta
        ------------------------
        aca va las cabeceras del metodo
        console.log(req.headers)

        ------------------------
        aca van los datos del body




---------- vid: 5 -----------
        
        res.end('Recibido')
        console.log('Peticion recibida');
    })
    
    httpServer.listen(3000, )  */