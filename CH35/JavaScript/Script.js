//comentarios de una sola línea
/*comentarios 
multinínea */

//alert("Hola mundo");

//console.log("Este es un mensaje para mi consola");

/*var nombre = prompt("ingresa tu nombre");
alert("Hola, "  + nombre  + " Bienvendio a la ch35");*/

/*var numero1 = parseInt(prompt("Ingresa el primer número:"))
var numero2 = parseInt(prompt("Ingresa el segundo número:"))

console.log("suma:" + (numero1 + numero2));
console.log("resta: " + (numero1-numero2));
console.log("multiplicación:" + (numero1 * numero2));
console.log("división: " + (numero1/numero2));*/

/*var edad = prompt("Ingresa tu edad:");

if (edad >= 18) {
    alert("Bienvenido. ¡Disfruta de la página!");
} else {
    alert("Lo siento, debes ser mayor de 18 años para acceder. Acceso denegado.");
}*/

//TIPOS DE DATOS Y VARIABLES
//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/*Todas nuestras variables deben ser declaradas con nombres específicos y claros, sin espacios, no deben iniciar con números*/ 

let nombre = "Daniel";
let invitadosExtras = 2;
let esMaryorEdad = true;
let edad = 24;
let invitadoEspecial = null;
let horaDeSalida = undefined;

//console.log(nombre);
document.write(nombre);

/* Encasillamiento o tipado
nos es útil para el mantenimiento del código ya que lo hace legible y acil de entender. Prevención de errores para reducir la probabilidad de los mismos mejoras el rendimineto de nuestro programa.
*/
/*let numero = 15;
let texto = "hola";

//con encasillamiento

let numeroEncasillado = Number = 5;
let textoEncasillado = String = "hola";*/

//typeof palabra reservada para sabe que tipo de dato tenenmos
console.log(typeof(nombre));

//Conversión de string a number 

let funcionNumber = console.log(typeof Number(nombre));
metodoParseInt = console.log(typeof(nombre));
metodoParseFloat = console.log(typeof parseFloat (nombre));

/*ParseInt y paseFloat son funciones que se utilizan para convertir a cadera de texto en números, ambas nos ayudan en este cambio */

//conversion de number a string 2 opciones:
////////////////////////////////////
/*
console.log(typeof String (edad));
console.log(typeof edad.toString());

//Convertir un booleano a número
let numero = Number(esMaryorEdad);
console.log(typeof (numero));

let texto = String(esMaryorEdad);
console.log(texto);
console.log(typeof(texto));
console.log(typeof esMaryorEdad.toString());

let negación = !esMaryorEdad;
console.log(negación);

//Concatenar (unir cadenas de texto)

let saludo = "Hola humano ";
let frase = "el futuro es hoy";
texto= saludo + frase;

document.write(texto);
console.log(texto);

document.write("Hola mundo");
*/
///////////////////////////////////
/*Tipos de datos
-String
-Number
-boolena
-Null
-Undefined
-Objetos
-Arrays
*/

/*
Console.log(); Nos permite visualizar en consola del navegador el código en JS
Console.warn() Muestra un mensaje de advertencia.
Console.error() Muestra un mensaje de error.
Console.table();
*/

/*
let firstName ;
firstName = 'Daniel';
let LastName = 'Maldonado'; //las dos son válidas

console.log(firstName + " " + LastName);
console.log("Mi nombre es " + firstName+ "y mi apellido es" LastName);
*/




/* ECMAScript 6 (ES6), Interpolación de cadenas
> - backticks `
> - Para variables ${}
> - Texto para streing
*/
//console.log(`Mi nombre es ${firstName} y mi apellidp es ${LastName} y tengo ${age} años`);  

//Console.warn();
//console.warn(`Precaución, no es buena práctica dejar sin punto y coma`);
//console.error();
//console.error(`Status 404 Failed`);

/* 
-Array. Se traduce como matriz o arreglo. Es un tipo de dato que pertece a Js, en el cual se almacena una coleccion de elmentos de manera ordenada.
- Los arrays se pueden manipular mediante metodos especificos. -
Los elementos de una array se contabilizan como indices empezando por indice 0 por lo cual el primer elemneto del arraty posee el indice 0.
un array posee n cantidad de elemntos.
- Se declaran como variables seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
*/
let arreglo1 = []; //Array vació
console.log(arreglo1);
//Los elemenntos de un array se separan mediante comas
let cars =["Vlkswagen", "BMW", "Mazda", "Kia"]; //Array de String
console.log(cars);
console.log(typeof(cars));

let salariesMx = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];
console.log(salariesMx.length);

/*OBJETOS
Los objetos son tipos de datos en jS con una estructura definida que nos permite almacenar información mediante llaves o claves y valores.
Su sintaxis es la sig
const object = {
    clave1: valor (dato),
    clave2: valor2 (dato2),
}
Los objetos pueden almacenar diferentes tipos de valores
*/
const employee = {
    firstName: "Rey David",
    LastName: "Martínez",
    age: 29,
    country: "México",
}
console.log(employee);
//Mostrando el objeto como tabla:
console.table(employee);