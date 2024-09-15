//Objetos - Destructuring de dos o más objetos

const producto = {
    nombre : "tablet", //todo es una propiedad //nombre es una key //"tablet" es un value 
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

// const carrito = {
//     cantidad: 1,
//     producto
// }
const carrito = { // solo carga las propiedades de producto
    cantidad: 1,
    ...producto
}

console.log(carrito)
console.log(carrito.nombre)

// const nuevoObjeto = {
//     producto: {...producto},
//     cliente: {...cliente}
// }

// const nuevoObjeto = {
//     producto,
//     cliente
// }

const nuevoObjeto = {
    ...producto,
    ...cliente
}

const nuevoObjeto2 = Object.assign(producto, cliente)


console.log(nuevoObjeto);
console.log(nuevoObjeto2);