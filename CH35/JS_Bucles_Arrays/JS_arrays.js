/* ARRAYS
Un array  es una colección o agrupación de elementos en una misma vaiable, cada uno de ellos ubicado  por la posición que ocupa el array.
Los arrays se utlizan para almacenar y organizar datos de manera más eficiente.
*/
//Crear un Array
const numeros =  [1, 2, 3, 4, 5];
//Array de cadena de texto
const comida = ["tacos", "sopita", "pan", "jugo"];
console.log(comida);

//Array mixto
const mixto = [
    "Pluma",
    8,
    true,
    {nombre: "Fer"}
];
console.log(mixto);
//Array vacío
const lista = [];
console.log(lista);
//Agregar elementos a mi array vacío
lista[0] = "Leche";
lista[1] = "Carne de pollo";
lista[2] = "huevo";
lista[3] = "verduras";
lista[4] = "kleenex";
console.log(lista);
//Otra manera de crear arryas
const frutas = new Array("Manzana", "Mandarinas", "Peras", "Uvas")
/*
Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array
*/
console.log(frutas);
// Longitud de un array
console.log(frutas.length);
//Acceder a los elementos del Aray, acord a su índice
console.log(frutas[3]);
console.log(frutas[4]); //undefined
//Modificar un elemento del array por el índie
const cremería = ["Jamón", "Salchicha", "Queso", "Queso cotija", "Yogurt"];
console.log(cremería);
cremería[2]="Quesillo";
cremería[4]="Danonino";
console.log(cremería);

//Arreglo de arreglos o multidimensional
console.log("Arreglo de arreglos");
//Estados : Estado de México , Guadalajara, Yucatán, Michoacán, Sonora, Oaxaca.
//Platillos: Guajolocombo, Torta ahogada, Panuchos, Dogos, Tlayuda,tacos.
const estados = ["Estado de México", "Jalisco", "Yucatán", "Sonora", "Oaxaca", "CDMX"];
const Platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayudas", "Tacos"];
const menu = [estados, Platillos];
console.log(menu[0][2]); //En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array. por lotanto imprime de estados a Yucatán.

console.log(`El ${menu[1][0]} se come en ${menu[0][2]}`);

/* MÉTODOS DE ARRAYS
Método de cola (queue). los métidos de cola implican agrear elementos al final del array y eleiminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) lo que significa que el primer elemeno añadido es el primer elemento eliminado
-push
-shift
-unshift

-Método de pila (stack). Implica agregar elementos al final del array y eliminar elementos del final del array. Sigue el principio LIFO (Last- in - first - out) que significa el último elemento añadido es el primero en sr elminado.
-push
-pop

*/
console.log("Métodos de Arrays");
const ch35 = ["Dan", "Fer", "Maara", "Gaby", "Mar", "Paola", "Enrique"];
console.log(ch35);
//pop() Eliminar el último elemento del array
let popch35 = ch35.pop();
console.log(popch35); // devuelve el dato eliminado
console.log(ch35); // elimina el dato de la lista

//push () Agregar al final del array
let pushch35 = ch35.push("Mony");
console.log(ch35);
//shift() quitar primero  del array
let shiftch35 = ch35.shift();
console.log(ch35);

//unshift agrega al princilpio del array
let unshiftch35 = ch35.unshift("Dani");
console.log(ch35);

//reverse () cambia el sentido del ordenamiento del array
let reversech35 = ch35.reverse();
console.log(ch35);
/* Investigar:
-sort
-forEach
-slice
-splice
*/
