const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
const numeros = [10,20,30]

//Filter

// const ejemploFilter = (tech) => console.log(tech)
// const nuevoArray = tecnologias.filter(ejemploFilter)

// const nuevoArray =  tecnologias.filter(function(tech) {
//     console.log(tech)
// })

// const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')
const nuevoArray = tecnologias.filter(tech => tech !== 'HTML') //si es solo un parametro puedes quitar los parentesis
const numArray = numeros.filter(numero => numero !== 10) 
console.log(nuevoArray)
console.log(numArray)

//Includes
// const resultado = tecnologias.includes('CSS')  //valor y punto seguido de la función lo hace un metodo

//Some - Devuelve si al menos uno cumple con la condición 
// const resultado = numeros.some(numero => numero !== 10)

//Find -  Devuelve el primer elemento que cumple la función
// const resultado = numeros.find(numero => numero > 15)

//Every- si todos cumplen la condicion regresa true o false
// const resultado = numeros.every(numero => numero >9) //util cuando requieres ver si todos los usuarios han pagado


//Reduce - Retorna un acumulado del total
const resultado = numeros.reduce((total, numero) => total + numero, 0) //util en carritos de compra
console.log(resultado)