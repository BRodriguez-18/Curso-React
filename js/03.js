//tipos de dato

/*
Tipos de dato

*/

//undefined

let cliente

console.log(cliente)
console.log(typeof cliente)

//String

cliente = 'hola';
cliente = "mundo";
console.log(cliente)
console.log(typeof cliente)

// Numbers
const numero = 20.20;
const numero2 = 20;
const numero3= -2020;
const numero4= "20";

console.log(typeof numero)
console.log(typeof numero4)
console.log(typeof numero2)
console.log(typeof numero3)


//BigInt

const numeroGrande = BigInt(2223241513454515153333334444433343434342222)
console.log(numeroGrande)
console.log(typeof numeroGrande)


//Boolean
 const descuento = false


 console.log(descuento)
 console.log(typeof descuento)
 
 //Null
 
 let descuento1 = null

  descuento1 = undefined
 console.log(descuento1)
 console.log(typeof descuento1)


 //Symbol
 const primerSymbol = Symbol(30)
 const segundoSymbol = Symbol(30)

//cada simbol es diferente a otro aunque tengan el mismo valor

 console.log(primerSymbol)
 console.log(segundoSymbol)