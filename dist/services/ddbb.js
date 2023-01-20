export const PRODU_DDBB = [
    {
      "id": 6247,
      "password": 713,
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "nickname": "Bishop",
      "name": "Toni Hamilton",
      "gender": "female",
      "email": "tonihamilton@mixers.com",
      "phone": 6822296160
    },
    {
      "id": 2076,
      "password": 1288,
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "nickname": "Valencia",
      "name": "Roxanne Blanchard",
      "gender": "female",
      "email": "roxanneblanchard@mixers.com",
      "phone": 5094194915
    },
    {
      "id": 4882,
      "password": 2630,
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "nickname": "Monique",
      "name": "Kathryn Wright",
      "gender": "female",
      "email": "kathrynwright@mixers.com",
      "phone": 4733162110
    },
    {
      "id": 8739,
      "password": 9373,
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "nickname": "Evans",
      "name": "Powell Kane",
      "gender": "male",
      "email": "powellkane@mixers.com",
      "phone": 1221600105
    },
    {
      "id": 1672,
      "password": 2273,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "nickname": "Elizabeth",
      "name": "Moss Luna",
      "gender": "male",
      "email": "mossluna@mixers.com",
      "phone": 8296096015
    },
    {
      "id": 8878,
      "password": 2044,
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "nickname": "Maryann",
      "name": "Jolene Mueller",
      "gender": "female",
      "email": "jolenemueller@mixers.com",
      "phone": 6933277095
    },
    {
      "id": 4977,
      "password": 7843,
      "picture": "http://placehold.it/32x32",
      "age": 36,
      "nickname": "Greta",
      "name": "Haley Maldonado",
      "gender": "male",
      "email": "haleymaldonado@mixers.com",
      "phone": 1634496923
    },
    {
      "id": 1497,
      "password": 4226,
      "picture": "http://placehold.it/32x32",
      "age": 42,
      "nickname": "Guy",
      "name": "Bush Phelps",
      "gender": "male",
      "email": "bushphelps@mixers.com",
      "phone": 7886323980
    },
    {
      "id": 5023,
      "password": 430,
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "nickname": "Terri",
      "name": "Maude Chan",
      "gender": "female",
      "email": "maudechan@mixers.com",
      "phone": 7273438476
    },
    {
      "id": 1602,
      "password": 4203,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "nickname": "Brooke",
      "name": "Lucille Nunez",
      "gender": "female",
      "email": "lucillenunez@mixers.com",
      "phone": 8612617573
    },
    {
      "id": 5851,
      "password": 1870,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "nickname": "Ayers",
      "name": "Nunez Gamble",
      "gender": "male",
      "email": "nunezgamble@mixers.com",
      "phone": 6921292103
    },
    {
      "id": 9704,
      "password": 4242,
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "nickname": "Natalia",
      "name": "Olivia Rodriquez",
      "gender": "female",
      "email": "oliviarodriquez@mixers.com",
      "phone": 4800592572
    },
    {
      "id": 4655,
      "password": 3949,
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "nickname": "Martha",
      "name": "Stokes Callahan",
      "gender": "male",
      "email": "stokescallahan@mixers.com",
      "phone": 4408734713
    },
    {
      "id": 9770,
      "password": 3271,
      "picture": "http://placehold.it/32x32",
      "age": 43,
      "nickname": "Herminia",
      "name": "Antonia Cruz",
      "gender": "female",
      "email": "antoniacruz@mixers.com",
      "phone": 1840979252
    },
    {
      "id": 7764,
      "password": 4568,
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "nickname": "Wise",
      "name": "Margie Lowery",
      "gender": "female",
      "email": "margielowery@mixers.com",
      "phone": 1380799001
    },
    {
      "id": 988,
      "password": 3663,
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "nickname": "Ladonna",
      "name": "Ebony Davis",
      "gender": "female",
      "email": "ebonydavis@mixers.com",
      "phone": 2820627081
    },
    {
      "id": 3657,
      "password": 6641,
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "nickname": "Selma",
      "name": "Mcdonald Thornton",
      "gender": "male",
      "email": "mcdonaldthornton@mixers.com",
      "phone": 6402259754
    }
  ]
  
 //-------------------------------------------
 export default PRODU_DDBB;
  /* accountRouter.get('/listar', (req,res) => {
    res.json(datos.listarAll())
  })
  
  accountRouter.get('/listar/:id', (req,res) => {
    let { id } = req.params
    res.json(datos.listar(id))
  })
  
  accountRouter.post('/guardar', (req,res) => {
    let carro = req.body
    id.guardar(carro)
    res.json(carro)
  })
  
  accountRouter.put('/actualizar/:id', (req,res) => {
    let { id } = req.params
    let carro = req.body
    datos.actualizar(carro,id)
    res.json(carro)
  })
  
  accountRouter.delete('/borrar/:id', (req,res) => {
    let { id } = req.params
    let carro = datos.borrar(id)
    res.json(carro)
  })
  
   */
  
 