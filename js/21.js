//Ternarios
const auth = true

const saldo = 1000
const pagar = 200
const tarjeta = false


if(auth) {
    console.log('Usuario autenticado')
}else{
    console.log('No Autenticado, is a Login')
}

auth ? 
console.log('Usuario autenticado') : 
console.log('No Autenticado, is a Login')

saldo > pagar ?
console.log('Si puedes pagar') : 
console.log('No puedes pagar')

saldo > pagar ?
console.log('Si puedes pagar') :
tarjeta ?  
console.log('Si puedes pagar') :
console.log('No puedes pagar')

saldo > pagar || tarjeta?
console.log('Si puedes pagar') :
console.log('No puedes pagar')