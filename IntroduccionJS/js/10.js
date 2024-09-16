const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
tecnologias[10] = 'Nest.js'
tecnologias.push('otra') //agrega a la siguiente posicion
//push muta, por ello no se recomienda usar en react

// const nuevoArreglo = [...tecnologias, 'Nest.js']
// const nuevoArreglo = [ 'Nest.js', ...tecnologias]

// tecnologias.shift() //muta


// const tecnologias2 = tecnologias.filter(function(tech){// para obtener objetos de acuerdo a una condicion
//     if(tech === 'HTML'){
//         return tech
//     }
// })

const tecnologias2 = tecnologias.map(function(tech){
    // console.log(tech)
    if(tech === 'Node.js'){
        return 'Nest.js'
    }else{
        return tech
    }
})

console.table(tecnologias2)
console.table(tecnologias)
console.table(nuevoArreglo)

// https://doesitmutate.xyz