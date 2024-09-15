const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Nest.js']

//  for(let i=0; i < 6; i++){
//     console.log(tecnologias[i])
//  }

//no tiene nada de malo pero JS hay otros mejores
//  for(let i=0; i < tecnologias.length; i++){
//     console.log(tecnologias[i])
//  }


 //forEach
tecnologias.forEach(function(tech){
    console.log(tech)
})

//map
//diferencia es que genera un nuevo array y en base a una condición
tecnologias.map(function(tech){
    console.log(tech)
})
 //forEach
const arrayforEach = tecnologias.forEach(function(tech){
        return tech
})

//map
//diferencia es que genera un nuevo array y en base a una condición
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayforEach)//undefined
console.log(arrayMap)//genera un nuevo arreglo

//for ... of
for(let tech of tecnologias){
    console.log(tech)
}
