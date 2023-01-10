console.clear();
import express from 'express'
import dotenv from 'dotenv';
import accountRouter from './routers/account.js';  // aca lo meto como un midd


dotenv.config();


// para usar el archivo ( .env ), instalamos la dependencia DOTENV --> en consola
//process.env.port  //--> al importarla, ya no necesito el procces --> este es global
const PORT = process.env.PORT || 8080

const expressApp = express();


expressApp.use(express.json())  // --> para entender el body en formato JSON

expressApp.use(express.text());  // ---> para entender el body en formato text 

expressApp.use(accountRouter);

//------------------------------ Router -----------------------------
/* basicamente es una mini app de express contenida en una app mas grande */


expressApp.listen(PORT, () => { console.log(`Server on, in port : ${PORT}`)  });
 

    //---------------------------------------------------------------