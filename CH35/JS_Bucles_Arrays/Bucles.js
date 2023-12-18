/* 
*===== BUCLES =====
* Iteración. Proceso de repetir una secuencia de instrucciones o acciones en un programa. Es decir, ejecutar un bloque de código muchas veces, basado en una condición o una colección de elementos.

* -- Operadores de incremento (++) y operadores de decremento (--)
*${} se utiliza en el contexto de plantillas de cadena (template literals). Las plantillas de cadena son una forma más conveniente y legible de concatenar cadenas y expresiones en comparación con las cadenas tradicionales con el operador +.
* Los operadores ++ y -- son conocidos como operadores de incremento y decremento respectivamente. 
*- El operador ++ se utiliza para aumentar el valor de una variable en uno.
*- El operador -- se utiliza para disminuir el valor de una variable en uno.
* (i)  : comúnmente utilizada como variable en bucles, es simplemente una convención de nomenclatura y puede ser cualquier nombre válido de variable que elijas. La "i" a menudo se utiliza como abreviatura de "índice" en el contexto de bucles, especialmente en situaciones donde se está iterando sobre índices de arrays o en situaciones similares.
*/
/*
***  CICLO FOR  ****
Un ciclo for se repite hasta que la condición se evalúe como false. Crea 3 expresiones opcionales
- Sintaxix
    for (expresión inicial; expresioninicial; Expresioncondicional);
        expresionactualización {
            Código a ejecutar en cada iteración del buble
        }
        1. Inicialización: se debe inicializar con uan variable que será evaluada en la expresión a comparar.
        2. Codndición: es una expresión que debe cumlir la varriable inicial (true), si no se cumple (false) el bucle termina.
        3. Pasos a realizar: son los intervalos qeu cambiarán la variable inicial mientras esta sea true.
*/
// Crear un programa para saber cuántos boletos vendemos para una rifa
for (let boleto = 1; boleto <=25; boleto++){
    console.log(`Boleto # ${boleto}`);
}
//Programa para venderbolos con una variable global
let bolos = 1;
for (bolos; bolos <= 20; bolos++){
    console.log(`vendi ${bolos}`);
}
//Cuenta regresiva
let cuentaRegresiva = 15;
for (cuentaRegresiva; cuentaRegresiva >=0; cuentaRegresiva--){
    console.log(cuentaRegresiva);
} //i+=5 en vez de i++
//Recorrer ayyas con el ciclo for
/*
Debemos usar índices del arreglo para poder usar el bucle, el índices desde el 0 hasta n y usaremos la propiedad length
*/

const ch35 = ["Rodrigo", "Diego", "Ania", "Rey", "Arturo", "Eunice"];
for (let i = 0; i < ch35.length; i++){
    console.log(ch35[i])
}
/**** Variaciones del ciclo for
-- for...of nos permite recorrer el objeto (array) y devuelve el valor
-- for...in nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/
/*let frutas = ("Manzana", "Mandarinas", "Peras", "Uvas", "mango");
for (let fruta of frutas){
    console.log(frutas + "grupo frutas");
}**/
// sumar números del 1 al 20
let suma = 0; 
for (let i = 1; i<= 20; i++){
    suma += i;
}
console.log(suma);

// Tabla 5
const tabla  = 5;
for (let i =1; i<= 10; i++){
    let resultado = tabla * i;
    console.log(`${tabla} x ${i}; ${resultado}`);
}

/** CICLO WHILE
 Recorrer un bloque de código siempre que una condición especifica sea verdadera.
 Sirve para realizar una tarea repetitiva mientras una condición sea verdad.
 */

 let productos = 5;
 while (productos > 0){
    console.log(productos + " productos vendidos");
    productos--;
 }

 //Imprimir números
 let num1 = 0;
 while(num1 < 10){
    num1++;
    console.log("El número es " + num1);
 }
/////////////////////////////////////////////////////////
 