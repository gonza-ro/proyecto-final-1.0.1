

export class Producto {
  constructor() {
    let id = 0;
    let productos = [];
    let producto = {};
    /* PRODU_DDBB.forEach(ele => console.log(ele)); */
  }

  listar(id) {
    this.id = this.productos.find((pro) => pro.id == id);
    console.log("El Id ingresado por parametro --> " + id);
    return id || { error: "No se encuentra el producto" };
  }

  listarAll() {
    /*  this.carri = PRODU_DDBB.forEach(ele => console.log(ele)); */
    console.log(this.productos);
    return this.productos
      ? this.productos
      : { error: "No hay productos cargados" };
  }

  guardar(producto) {
    productos.id = ++this.id;
    this.productos.push(producto);
  }

  actualizar(producto, id) {
    producto.id = Number(id);
    let index = this.productos.findIndex((pro) => pro.id == id);
    this.producttos.splice(index, 1, producto);
  }

  borrar(id) {
    let index = this.productos.findIndex((pro) => pro.id == id);
    return this.productos.splice(index, 1);
  }
}