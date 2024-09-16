//Objetos - Destructuring de dos o más objetos

const producto = {
    nombre : "tablet", //todo es una propiedad //nombre es una key //"tablet" es un value 
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
        calle: "Calle México"
    }
}


//esto ayuda en ocasiones cuando las dependencias 
//llegan a manejar mismos nombres de la variable para los valores
const {nombre} = producto;
// const {nombre: nombreCliente, direccion: calle} = cliente
const {nombre: nombreCliente, direccion: {calle}} = cliente //asi accedes al valor de dentro de calle

console.log(nombre)
console.log(nombreCliente)

console.log(calle)