// Declarativas

function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');

// Expresión
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre('Diego');

/* DIFERENCIAS
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no.
Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada,
y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
*/
