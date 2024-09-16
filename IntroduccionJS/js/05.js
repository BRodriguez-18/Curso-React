//Objetos - Manipulación

const producto = {
    nombre : "tablet", //todo es una propiedad //nombre es una key //"tablet" es un value 
    precio : 300,
    disponible : true
}

// Object.freeze(producto); //No deja manipular sus propiedades
 Object.seal(producto); //No deja agregar o eliminar sus propiedades, pero si valores



//Reescribir un valor
producto.disponible = true;
//no es tan estricto con las variables de un const.

//sino existe, lo añade
producto.imagen = "imagen.jpg";

//eliminar propiedad
delete producto.precio;

//]Object tiene varios metodos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object


console.log(producto)