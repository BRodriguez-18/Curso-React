const saldo = 1000
const pagar = 1200
const tarjeta = false

/*
    Logical Or y Logical And
    || Or - Al menos una se cumple
    && And - Revisa que todas se cumplan  
*/

if(saldo>=pagar){
    console.log('Puedes pagar') //siempre se ejecuta la primera opción que sea valida
}else if(tarjeta){
    console.log('Puedes pagar')
}else{
    console.log('No puedes pagar')
}