//Objeto

const producto = {
    nombre : "tablet", //todo es una propiedad //nombre es una key //"tablet" es un value 
    precio : 300,
    disponible : true
}

console.log(producto)
console.table(producto)
console.log(producto.nombre) //sintaxis de punto
console.log(producto.precio) 
console.log(producto.hola) //undefined 

//antes
const nombre1 = producto.nombre
console.log(nombre1)

//destructuring  //forma moderna
// const {nombre} = producto
// console.log(nombre)
const {nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement
const autenticado = true
const usuario = "Juan"

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario: usuario
// }
// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario
// }
const nuevoObjeto = {
    autenticado,
    usuario //si la llave y el valor se llaman igual esto aplica
}

console.log(nuevoObjeto)