//Funciones -  Function Expression

//no se puede llamar una funcion antes de crearla
const sumar = function(numero1 = 0 , numero2 = 0 ) { //numero ahi es un parametro
    console.log(numero1, numero2)
    console.log(numero1 + numero2)
}

sumar(10, 2)


//en caso de utilizar Function Declaration primero registra las funciones en su primer llamado y en el segundo las ejecuta
//pregunta de JR