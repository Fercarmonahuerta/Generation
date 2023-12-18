/*
Es un signo que especifica que debe efectuar una determinada operación
- Aritméticos (+, -, *, /, %, ++, --)
- Asignación (=)
-Lógicos (&&. ||, !)
- Comparación (==, ===, <, >, <=, >=)
- De cadena (toLowerCase, toUpperCase, trim, toString,concat, + )

## Aritméticos
(+): suma, se utiliza para sumar dos número
(-): resta, se usa para rstar un número de otro
(*): multiplicación, Se utiliza para multiplicar dos numeros
(/): división, se utiliza para dividir un numero entro otro,
(%): residuo: se ua para obtener el residuo de uan división
(++): Incremento, aumenta de uno la cantidad o numero
(--): decremento, disminuye de uno en uno la cantidad o el numero
*/
let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1- numero2;
multiplicación = numero1 * numero2;
división = numero1 / numero2;
residuo = numero1%numero2;
incremento = numero1;
incremento ++;
decremento = numero2;
//decremento = --;

console.log(suma);
console.log(resta);
console.log(multiplicación);
console.log(división);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/1000
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio Real:$" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Porcentaje de descuento" + porcentajeDescuento);
console.log("Cantidad de descuento:$" + cantidadDescuento);
console.log("Precio con descuento:$" + precioConDescuento);

/*Operadores de asignación
(=) Asigna*/
let frutas = 'manzana';
/*Operadors de comparación
(==): Igualdad compara si nuestros valores son iguales*/
let numero3 = 10;
let texto = "10";
console.log(numero3 == texto);

/*(===): Igualdad estricta, compara si los valors son iguales y el tipo de dato*/

console.log(numero3 === texto);

/*(!=): Desigualdad o distinto este operador vefifica si dos valorse son iguales y de ser necesario realiza la conversión
 */
let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo){
    console.log("El precio del producto no es igual al precio máximo");
} else {
    console.log("El precio del producto es igual al precio maximo permitido");
}

/*(!===)Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valoes deben tener el mismo tipo y valor */
let numero5 = 10;
let numero6 = "15";

if (numero5 !== numero6){
    console.log("son diferentes")
} else {
    console.log("Los valores son iguales");
}

let numero7 = 41;
let numero8 = "50";

if (numero7 !== numero8){
    console.log("Los valares son diferentes");
} else {
    console.log("Los valores son iguales");
}

//(>): Mayor que basicamente nos indica si un valor es mayor que otro

let puntuacionfinal = 85;
let puntuacionRequerida = 102;

console.log(puntuacionfinal > puntuacionRequerida);

//(<): Menor que nos indica si un valor es menor que otro

let anios = 20;
let edadLimite = 30;

console.log(anios < edadLimite);

//(>=) Mayor o igual que nos dice si un valor es mayor o igual a otro

let edad = 40;
let edadNecesaria = 18;

console.log(edad>= edadNecesaria);

//(>=)menor o igual que, nos dinica si el valor es menor o igual a otro
let temperatura = 14;
let temperaturaMaxima = 21;
console.log(temperatura <= temperaturaMaxima);

/////////////// EJERCICIOS //////////////
//ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
// Solicitar al usuario que ingrese dos números
let primerNumero = prompt("Ingrese el primer número:");
let segundoNumero = prompt("Ingrese el segundo número:");

// Convertir las entradas a números
primerNumero = parseFloat(primerNumero);
segundoNumero = parseFloat(segundoNumero);

// Verificar si los números son iguales o si uno es mayor que el otro
if (isNaN(primerNumero) || isNaN(segundoNumero)) {
  console.log("Por favor, ingrese números válidos.");
} else if (primerNumero === segundoNumero) {
  console.log("Los números son iguales.");
} else if (primerNumero > segundoNumero) {
  console.log("El primer número es mayor que el segundo.");
} else {
  console.log("El segundo número es mayor que el primero.");
}

//ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no

// Solicitar al usuario que ingrese dos palabras
let primeraPalabra = prompt("Ingrese la primera palabra:");
let segundaPalabra = prompt("Ingrese la segunda palabra:");

// Verificar si las palabras son iguales o diferentes
if (primeraPalabra === segundaPalabra) {
  console.log("Las palabras son iguales.");
} else {
  console.log("Las palabras son diferentes.");
}

//OPERADORES LÓGICOS
/*(&&) AND se utiliza cuando las dos condiciones deben cumplirse */
let mayoriaDeEdad = 18;
let tieneIdentificacion = true;

if (mayoriaDeEdad >= 18 && tieneIdentificacion){
    console.log('Puede rentar el salón');
} else {
    console.log('No lo puedes rentar');
}

// (||) OR se utiliza cuando se debe cumplir una condición u otra.
let esPrime = false;
let descuento = true;

if (esPrime || descuento){
    console.log('Califica para descuento');
}else {
    console.log('No califica para desuento');
}

//(!)NOT se usa para nergar el valor de una condición
let esDiaLibre = false;
if (!esDiaLibre){
    console.log('Se trabaja');
} else{
    console.log('Descansito');
}

//OPERADORES DE CADENA
//tolowerCase hace el cambio de nuestro string a minúsuclas
let mensajeUsuario = 'Bienvenidos a la tierra';
let cambioMinusculas = mensajeUsuario.toLowerCase();
console.log(cambioMinusculas);

//toUpperCase hace el cambio de nuestro string a mayúsculas
let saludo = 'Casi viernes, casi navidad';
let cambioMayusculas = saludo.toUpperCase();
console.log(cambioMayusculas);

//trim quita los espacio
let aviso = '    ch35   ';
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//toString convierte un tripo de dato en cadena
let numero10 = 31;
let cadenas = numero10.toString();
console.log(cadena);

//concat
let nombre = 'Fernanda';
let apellido = 'Carmona';
let nombreCompleto = nombre.concat(" ",apellido);
console.log(nombreCompleto);

/*Expresiones
-expresión aritmética
let operación = 14+25*12; combina la suma con la multiplicacion
-expresión de cadena
let notificacion = 'Casi,' + 'Año nuevo'; expresión concatenando
-expresion logica
let esMayorDeEdad = (23>18) && (65); tiene operadores logicos y de comparación
-Expresión de asignación
let frasco = chocolate; asigna el vaor a la varible
*/
///////// HACER UNA RECETA DE HOTCAKES CON UNA FUNCIÓN Y USANDO OPERADORES 

function verificarIngredientes(huevos, harina, leche, azucar) {
    if (huevos >= 2 && harina >= 200 && leche >= 250 && azucar >= 50) {
        return "Tienes suficientes ingredientes para hacer hotcakes.";
    } else {
        return "No tienes la cantidad suficiente de ingredientes.";
    }
}

// Ejemplo de uso:
let cantidadHuevos = 3;
let cantidadHarina = 300;
let cantidadLeche = 300;
let cantidadAzucar = 60;

let resultado = verificarIngredientes(cantidadHuevos, cantidadHarina, cantidadLeche, cantidadAzucar);
console.log(resultado);