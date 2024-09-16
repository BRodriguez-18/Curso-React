//Funciones que retornan valores

// const sumar = (numero1 = 0, numero2 = 0) => {
//     return numero1 + numero2 //Tiene que tener un return para usar el valor fuera de la función
// }

const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2 //de esta forma se da implicito el return

sumar(10,20)

const resultado = sumar(20,30) //sirve para sacar el valor de la función y manejarlo después

console.log(resultado)