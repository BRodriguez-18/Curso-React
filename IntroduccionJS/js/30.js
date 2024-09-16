//Eventos del dom - Clicks
const heading = document.querySelector('.heading')

heading.addEventListener('mouseenter', () => {
    heading.textContent = 'Nuevo heading con click'
})
heading.addEventListener('mouseleave', () => {
    heading.textContent = 'Nuevo heading con leave'
})

const enlaces = document.querySelectorAll('.navegacion a')

// enlaces.forEach(enlace => {
//     enlace.addEventListener('click', () =>{
//         console.log('diste click en un enlace')
//     })
// })

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) =>{
        
        //los enlaces tienen opciones por default como los enlaces que son de abrir otra url
        e.preventDefault() //quita la accion default
        console.log(e.target)

        e.target.textContent = 'diste click'


    })
})