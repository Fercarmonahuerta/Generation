/* Paradigmas de programación
-- Programación imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada.
-- Programación basada en eventos: Se basa en la gestión y respuesta de eventos
-- Programación Declarativa: Explicar o que queremos obtener.
-- POO: Toma cierta información o estrucutra del mundo real (objetos) para poder explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (métodos).
*/
/*
Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancia de este tipo de objeto.
*/
class persona{
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    teléfono = "";

//objetos
//El constructor es una función especial, cuya finalidad es la de construir o instancia objetos
//Para iniciar un objeto es necesario definir un constructor que tomará los atributos 
//Clases = molde, Objeto = gomita, constructor=chefsito, atributos= ingredientes, métodos=comportamientos
constructor (nombre, apellido, edad, email, teléfono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.teléfono = teléfono;
}

comer(){
    console.log("Bon apetit");
}//Método comer
bailar (){
    console.log("Dale hasta el suelo");
}// método bailar
mostrarInfo(){
    console.log("Nombre:", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad:", this.edad);
    console.log("Email:", this.email);
    console.log("Teléfono:", this.teléfono);
}

}
//Instanciando un objecto:
let usuario1 = new persona ("Fernanda", "Carmona", 29, "fer@gmail.com", "552746151",);
let usuario2 = new persona ("Eduardo", "Olvera", 28, "eolvera.arq.mex@gmail.com", "55123456");
let usuario3 = new persona("Sofía", "Carmona", 24, "sofi@gmail.com", "55789456");
let usuario4 = new persona("Elizabeth", "Álvarez", 29, "elialv@gmail.com", "456123");
let usuario5 = new persona("Guadalupe", "Huerta", 61, "lupehuer@gmail.com", "7891324");

console.log(usuario1);
console.log(usuario4.email); //imprime un atributo 
usuario5.comer(); // Invaca el método
usuario2.mostrarInfo();
usuario3.bailar();
console.log(usuario3.teléfono, usuario5.apellido);

//Pilares de la programación orientada a objetos
/*
- Herencia
- Polimorfismo
- Encapsulamiento
- Abstracción
*/
//La Herencia nos permite heredar a clases inferiores

class arrendador extends persona{ //subclase
    capacidad = 0;
    costo = "";
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, teléfono, capacidad, costo, nombreLugar){
        super(nombre, apellido, edad, email, teléfono);
        this.capacidad = 0;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

mostrarInfo(){
    console.log("Capacidad", this.capacidad);
    console.log("Costo", this.costo);
    console.log("Nombre del lugar", this.nombreLugar);
}
}

class arrendadorGuadalajara extends arrendador{

}

let arrendador1 = new arrendador("Rocío", "Hernández", 29, "rocio@gmail.com", 100, 50000, "salón G");

//console.log(arrendador1);
console.log(arrendador1.costo);
arrendador1.mostrarInfo();

////////////////////////////
class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();
  ///////////////////////////////
  /* Polimorfismo: Tener objetos de diferentes tipos que peuden ser manipulados en común. Nota: la posibilidad de realizar cambios en distintos objetos, que compartan atributos en común
  */
 class producto{
    
    marca = "";
    precio = 0;

    constructor(marca, precio){
        this.marca = marca;
        this.precio = precio;
    }

    mostrarDescripcion(){
        console.log("Marca ");
        console.log("Precio");
    }
 }
 let producto1 = new producto("cerave", 85);

 //Encapsulamiento. Oculta la imprementación de un objeto y solo mostrar los datos necesarios
 class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo,
        this.#contraseña = contraseña;
    }
    verificarContraseña(contraseña){
        return this.#contraseña === contraseña;
    }
 }

 //Abstracción no es nada más que treaer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos.
//Los objetos de tipo Json en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto gracias a que son más flexibles y generalmente se ejecutan con fetch
 /* let objetoJson = {
    "nombre = "juanin";
    "apellido" = "Juan Harry";
    "edad" = 31;
 }
 */


 let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}

console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);

//Principios Solid
/*
1. Principio de responsabilidad única (Single Responsability Principle)
Una clase de tener asignada una tarea o responsabilidad específica y esta no debería de cambiar 
2. Principio abierto/cerrado (open/closed principle OCP)
Una clase pued estar abierta a extensiones y agreagr nuevas funcionalidades, pero sin generar cambios en la misma.
3. Principio de sustitución de Liskow (Liskov Sustitucion Principle). Una clase hijo puede sustituir objetos de una clase padre
4. Principio de segregación de interfaces. Delimitar los métodos que necesito y dejar fuera los innecesarios.
5. Principio de inversión de dependencias (Dependency Inversion Principle DIP )
*/

/* Programa que conste de una clase llamada alumno que tenga como atributos (constructor), imprimirlos imprimirlos y mostrar un mensaje con el resultado de si la calificación es aprobatorio o no

Atributos
Nombre
Calificacion

Métodos 
imprirCalificacion
evaluación

La calificación aprobatoria es de 6
if para evaluar la calificacion 
*/


///**************************** */

class Alumno {
    nombre = "";
    calificacion = 0;

    constructor(nombre, calificacion) {
      this.nombre = nombre;
      this.calificacion = calificacion;
    }
  
    imprimirCalificacion() {
      console.log(`Calificación de ${this.nombre}: ${this.calificacion}`);
    }
  
    evaluacion() {
      if (this.calificacion >= 6) {
        console.log(`${this.nombre} ha aprobado.`);
      } else {
        console.log(`${this.nombre} no ha aprobado.`);
      }
    }
  }
  

  let alumno1 = new Alumno("Juan", 8);
  let alumno2 = new Alumno("Maria", 5);
  
  alumno1.imprimirCalificacion();
  alumno1.evaluacion();
  
  alumno2.imprimirCalificacion();
  alumno2.evaluacion();
  