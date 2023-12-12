console.log("Hola CH35");
/*  
*Control de flujo y estructuras de control
* 
*Las estructruas de control son un componente fundamental dentro de la programación, entre algunas de las facilidades y ventajas que nos proporcionan para ecribir y depurar código podemos mencionar las siguientes:

- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista
 */
/* Declaración de sentencia IF-ELSE
*Palabra reservada if para comenzar la declaración, se coloca un paréntesis () donde se debe colocar una expresi´n lógica true or false, se abre y cierran llaves {} para indicar que sentencia va a ejecutar si la condición se cumple (tru), despues de la llave colocamos la palabra reservada ELSE, PARA ESTE EJEMPLO NO ES NECESARIO COLOCAR MÁS EXPRESIONES DENTRO DE UN ()
*Simplemente colocamos otras llaves {} para indicar el bloqeu de código que tiene que ser ejecutado en caso de que la condición no se cumpla (false).

*/

let n = 15;
if (n > 10) {
    console.log(true);
} else {
    console.log(false);
}
/*
 *if-else-if
 * 
 * Se trata de la misma sentencia if-else declarada anteriormente
 * Lo que vamos a hacer diferente es, en este caso, anidar varias veces
 * esta misma sentencia, lo que nos permitira tomar decisiones
 * mas complejas
 * 
 * Usaremos la contatenación.
 * Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
 * 
 * Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 * en codigo poco legible y confuso
*/

// If anidados
let edad = 18;
if (edad < 18) {
    console.log("Eres menor de edad, retírate"); 
} else if (edad >= 18 && edad < 65){
    console.log("Eres un adulto joven");
} else {
    console.log("Eres un adulto mayor");
}

/**
 * Sentencia SWITHC
 * La sentencia switch es oto tipo de estructura de control de flujo, que , nuevamente se encuentra en diversos lenguajaes de programación.
 * Es bastante parecida a la sentencia if-else pero, va a ser diferente en cuanto a comportamiento, ya que  no se basa en una bifurcación (partición de caminos), si no que se secciona en múltiples casos (case) que, dependiendo de la expresión que cumpla con un caso específico, será la secuencia que se va a ejecutar, dentro de la declaración.
 * Declaración.
 * se empieza por colocar la palabra reservada switch, seguida de esto, colocamos parentésis () donde se debe colocar el valor que va indicar que sentencia/caso a ejecutar.
 * Falta indicar el bloque de código que se limita a esta sentencia, como lo hacíamos en la sentencia if o con las funciones.
 * Dentro de este bloque de código, falta colocar los casos para cada valor que se dese, establecer según sea el valor indicado dentro de el paréntesis ().
 * Cada uno de estos casos se separa de la siguiente manera:
 * case valor : instrucción a ejecutar si el valor empta con este caso.
 * Después para indicar que la ejecución de las sentencias debe cortarse cuando se cumpla, se coloca la instrucción BREAK.
 * Cuando terminemos de establecer los casos que necesitemos declara, dentro de nuestra sentencia, debemos colocar un valor por defecto.
 * Esta última sentencia nos permite establecer un valor por defecto, si es que este valor colocado no empata con ningún otro dentro de la sentencia o en ninguno de ls casos.
 * default: mensaje no disponible
 */

let dia = "martes";
switch (dia) {
    case "lunes" :
        console.log ("Inicio de semana");
        break;
    case "martes" :
        console.log ("Segundo día de la semana");
        break;
    case "miércoles" :
        console.log ("Toca presentar proyecto");
        break;
    case "jueves" :
        console.log("ya casi termina la semana");
        break;
    case "viernes" :
        console.log("Por fin es viernes!");
        break;
    case "sábado":
        console.log("Sábadaba de convivencia");
        break;
    case "domingo":
        console.log("Domingo de misa");
        break;
    default :
        console.log("día desconocido");
        break;
//Termina el switch
}
//  OPERADOR TERNARIO
/**
 *Expresión condicional if-else más simple y legible
 - Principalmente se usa para simplificar condiciones de una sola expresión
 - También puede anidar sentencias if-else-if, sin embargo, no es recomentdado poque el código se puede volver confuso y poco legible.
  - Su declaración es la siguiente:
  - Palabra reservada var, let o const
  Se le asigna un nombre como sei se tratara de una variable, operador de asignación "=", seguido de este operador, hay que colocar una expresión lógica, esta va dentro de un paréntesis  () después hay que colocar un caracter ? que indica el camino a seguir, dependiendo de si, se cumple (o no ) la expresión.
  Para separar el resultado true de false debemos agregar un caracter de :, del lado izquiero se coloca la sentencia a ejecutar.
  Si se cumple la condición, del lado derecho se coloca la sentencia a ejecutar
 */
// Ejemplo de operador ternario
let verificacion = n > 5 ? "Si es mayor" : "No es mayor"
console.log(verificacion);

/* Cuando usar if-else y cuando witch?
if-else : cuando necesitemos tomar decisiones bajo condiciones mas flexibles.
Switch : cuando tenegamos un conjunto fijo de valores para comparar una expresión. 

*/

// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
let edad1 = 18;
if (edad1 >= 18) {
    console.log("Eres mayor de edad, Tienes edad suficiente para votar");
} else {
    console.log("No tienes edad suficiente para votar");
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function esDivisiblePor7y8(numero) {
    // Verificar si el número es divisible entre 7 y 8
    if (numero % 7 === 0 && numero % 8 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Casos de prueba
  let numerosPrueba = [56, 7, 8, 0, 224, 73];
  
  for (let i = 0; i < numerosPrueba.length; i++) {
    let numeroActual = numerosPrueba[i];
    let resultado = esDivisiblePor7y8(numeroActual);
  
    console.log("¿" + numeroActual + " es divisible entre 7 y 8? " + resultado);
  }


/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
// Generar un número aleatorio entre 1 y 100 

function divisible(numero) {
    
    if (numero % 7 === 0 || numero % 8 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divisible(15));
console.log(divisible(16)); 
console.log(divisible(35));

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
let categoria = "terror";
switch (categoria) {
    case "accion" :
        console.log ("Te recomiendo ver el Atlas de las nubes, una peli de misterio y acción sobre vidas pasadas");
        break;
    case "drama" :
        console.log ("Te recomendamos la Milla verde, un clásico del cine");
        break;
    case "comedia" :
        console.log ("La recomendación es la película super cool");
        break;
    case "romance" :
        console.log("La película La la land es mi recomendación");
        break;
    case "suspenso" :
        console.log("The witch es mi recomendación para una película de suspenso");
        break;
    case "terror":
        console.log("Te super recomiendo siniestro, es de las pocas películas que realmente me han hecho saltar del sillón");
        break;
    default :
        console.log("Intenta otra categoría");
        break;
}


/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
function cajeroATM(opcion) {
    if (opcion === 1) {
      console.log("Acción: Retirar dinero");
    } else if (opcion === 2) {
      console.log("Acción: Transferencia");
    } else if (opcion === 3) {
      console.log("Acción: Depósito");
    } else if (opcion === 4) {
      console.log("Acción: Pago de servicios");
    } else {
      console.log("Opción no válida. Por favor, seleccione una opción del 1 al 4.");
    }
  }
  
  // Ejemplo de uso
  let opcionSeleccionada = 2; // Puedes cambiar este valor para probar diferentes opciones
  cajeroATM(opcionSeleccionada);
/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */
let cantidad = "euros";
let pesos = 30;
switch (cantidad) {
    case "dolares estadounidenses" :
        console.log (n * 0.058);
        break;
    case "euros" :
        console.log (n * 0.054);
        break;
    case "yenes" :
        console.log (n*8.41);
        break;
    case "libra esterlina" :
        console.log(n * 0.046);
        break;
    case "franco suizo" :
        console.log(n * 0.051);
        break;
    default :
        console.log("Error, elilge la divisa");
        break;
}
