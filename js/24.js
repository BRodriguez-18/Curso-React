//asi se importan las funciones que necesitas de una libreria
import {sumar} from './funciones.js' //importaciones arriba de los archivos
import restar from './funciones.js' //importaciones arriba de los archivos
// import hola from './funciones.js' //solo puede haber un export default por modulo
// import {sumar as funcionSumar, restar} from './funciones.js'


// const resultado = hola(1,2)
const resultado = restar(1,2)

console.log(resultado)
