//Manipular elementos HTML con JS
const heading = document.querySelector('.heading')
const enlaces =  document.querySelectorAll('.navegacion a')

console.log(heading.textContent)

heading.textContent = 'Un nuevo heading...'

// heading.id='Un nuevo id'
// heading.removeAttribute('id')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un nuevo valor...'

// console.log(inputNombre.classList)
enlaces[1].textContent = 'Nuevo Enlace'

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')