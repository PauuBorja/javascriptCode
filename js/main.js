console.log("Hello World!");

//alert("Bienvenido a JavaScript");
/*
comentario multilinea
*/

//let nombre = prompt("Cual es tu nombre")
//console.log(parseInt(nombre))
//console.log(typeof(nombre))


let numeroUno = prompt("Ingresar un numero");
let numeroDos = prompt("Ingresar otro numero");

let resultadoSuma = parseInt(numeroUno) + parseInt(numeroDos);
let resultadoResta = parseInt(numeroUno) - parseInt(numeroDos);
let resultadoMultiplicacion = parseInt(numeroUno) * parseInt(numeroDos);
let resultadoDivision = parseInt(numeroUno) / parseInt(numeroDos);
console.log(`El resultado de la suma es:${resultadoSuma}`); 

//Dados dos identificar cual numero es mayor 
//cual es el menor o si son iguales 

let numeroOne = prompt("Ingresar un numero");
let numeroTwo = prompt("Ingresar otro numero");

 if (numeroUno > numeroDos) {
    console.log(`El numero ${numeroUno}es mayor que ${numeroUno}`);
} else if (numeroDos>numeroUno){
 console.log(`El numero ${numeroUno} es igual a${numeroDos}`);
} else{
console.log(`El numero ${numeroUno}  es igual a ${numeroDos}`);
}
 
//Dado un numero; identifican si es numero par o impar.
