//Optional Chaining (?)

const alumno = {
    nombre: 'Juan',
    clase: 'Programación',
    aprobado: true
}
//sirve para manejar respuestas de las apis

console.log(alumno.examenes?.examen1) //para evitar errores
//verufica que exista la propiedad y si no evitar errores
console.log('Despues de alumno')

//Nullish coalescing Operator (??)
//Operador logico que retorna el operando del lado derecho cuando el del izq es null o undefined

const pagina = 10 ?? 1  //sirve para paginadores
console.log(pagina)