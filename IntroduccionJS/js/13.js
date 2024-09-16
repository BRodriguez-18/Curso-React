//Funciones 

//Function Declaration

function sumar() {
    console.log(1+1)
}
function sumar2() {
    console.log(2+2)
}

sumar()
sumar2()

// function sumarInteligente(numero1, numero2) { //numero ahi es un parametro
//     console.log(numero1, numero2)
//     console.log(numero1 + numero2)
// }

// sumarInteligente(1);//aqui es un argumento 
// sumarInteligente(1,10);

//si función quiere realizar una operacion y falta algun valor marca como NaN
//pero se pueden agregar valores default

function sumarInteligente(numero1 = 0 , numero2 = 0 ) { //numero ahi es un parametro
    console.log(numero1, numero2)
    console.log(numero1 + numero2)
}

sumarInteligente(1);
sumarInteligente(1,10);
