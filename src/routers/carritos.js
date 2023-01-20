//----------------------------------------------------------------------

//--------------- CLASE CARRITO ---------------
export class Carrito {
  constructor() {
    let id = 0;
    let carritos = [];
    /* PRODU_DDBB.forEach(ele => console.log(ele)); */
    let carro = {};
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