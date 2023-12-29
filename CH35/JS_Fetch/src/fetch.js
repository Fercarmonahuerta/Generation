//Programación sincrónica
function two (){
    console.log("dos"); //Nunca se invoca hasta dentro de one
}

function one(){  //aqui se invoca primero a uno luego a dos y luego a tres
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("*************");
//programación asincrona
/* SetTimeout que recibe una función anónima y establece un tiempo (en milisegundos 1000ms = 1s) de ejecuci´n para cumplir con la condición de asíncrona
 */

const twoAsync = () => {
    setTimeout( () =>{
        console.log("dos Async");
    }, 5000);
    
}

const oneAsync = () => {
    setTimeout(function(){
        console.log("uno Async");
    }, 2000);
    twoAsync();
    console.log("tres Async");
}
oneAsync();

/* Trabajando con promesas mediante Fetch API
*/
const url = "https://jsonplaceholder.typicode.com/users"
//Si se cumple la promesa, vamos a traer los datos d ela api y se convertirá en tipo json para poder mostrarlos en consola
// --> Usando fetch para mostrar en consola:
fetch(url)
    .then(data => data.json())
    .then(data =>{
        console.log(data[0].name); //muestra solo el primer elemento de la api
        console.log(data)// mostrando todos los usuarios
    })
    .catch(error => console.error("Ups, algo salió mal!", error))

 // --> Usando fetch para mostrar en navegador
 const botonInfo = document.querySelector("#btn-mensaje");
 const info = document.querySelector("#mensaje");

 //Variable para guardar la informacilón que se va a traer desde la api. Debe ser de tipo null
 let post = null;

 //Consumiendo API con fetch
 botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/6")
        .then(response => response.json())
        .then(response => {
            post = response; //guardo los datos de response en la variable de tipo null, para que modifique el dato
            //Mandamos a llamar la varibale desde la función (pero esa no la hemos hecho, hay que hacerla)
            mostrarDatos(post); //hoisting
        })
        .catch(error => console.error("Problemas!", error));
 });


 //Función que me permita controlar o modificar (manipular) la variable de itpo null
 //Quiero traer name, username, email, phone del user de la api 
const mostrarDatos = (post) => {
    //Creando nodos (elementos) mediandte DOM manipulation
    const name = document.createElement("h2");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    //Ponerlos en el HTML (inner html)
    name.innerHTML = post.name;
    userName.innerHTML = post.username;
    email.innerHTML = post.email;
    phone.innerHTML = post.phone;

    //hacer que se aparezcan en el navegador
    info.appendChild(name); //se llama al padre aquí
    info.appendChild(userName);
    info.appendChild(email);
    info.appendChild(phone);
}

//Usando fetch para mostrar en navegador (MOSTRAR PRODUCTOS)
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store"); //tomamos tienda como el padre
let productos = null;

botonProductos.addEventListener("click", ()=>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response => {
        productos = response
        //función definir
        mostrarProductos(productos);
    })
    .catch(error => console.error("Cuidado!", error))
});

//Función para crar, agregar y mostrar elementos desde el DOM 
const mostrarProductos = (productos) => {
    //mando a llamar title, price, description, category, image desde la API 
    productos.map((productos) => {//El método map toma el array 8objeto en js y crea nevos arreglso que se pueden manipular de manera individual. Asi, evitamos l uso de un ciclo for Each
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const  descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr")

    //Enviar a HTML con innerHTML
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.precio;
    descripcion.innerHTML = productos.descripcion;
    categoria.innerHTML = productos.categoria;

    //Mostarlos en navegador al agregarlos 
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
    })
}
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//Método POST utilizando FETCH, permite crear recursos en la API 
fetch("https://jsonplaceholder.typicode.com/posts", {
    //indicar que es un método de tipo POST
    method: "POST",
    //creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userId, title, body)
    bodY: JSON.stringify({//books
        userId: 1986, //userid
        title: "Sueñan los androides con ovejas eléctricas?",
        body: "Author: Philipe K. Dick"//author.value
    }),
    //Definir headers
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }

})// fin de fetch 
//inicio de promesas
.then(response => response.json())
.then(json => {
    console.log(json)
})

/* >>>>>>>>>>>>> Programación asíncrona (promise)<<<<<<<<<<<<<<< */
//Función flecha de tipo async-await
//indico que es una función asyncrona con la palabra reservada asyn antes de los parámetros
const getUser = async () =>{
//Para que se cumpla la promesa, no utiliza then, sino que usamos try, para errors se sigue usando catch
    try{
        //Retardo para que se ejecute de manera asíncrona. Tengo que crear una nueva promesa, que recibe un setTimeout
        await new Promise(resolve => setTimeout(resolve, 3000))
        //Mi promesa qeu se ejectuta
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error("Error inexplicable", error);
    }
}
//Invocar función , por favor que no se nos olvide
getUser();

/* >>>>>>>>>> LocalStorage<<<<<<<< */
//Nos permite crear, modificar, eliminar, guardar objetos de javaScript de manera local

//Crear un objeto de JS con sus llavees y valors
const user = [{
    id: 1,
    name: 'Daniel',
    apellido: 'Maldonado',
    email: "danieldlcm@idr.com",
    posicion: "instructor",
    empresa: "Generation"
},
{
    id: 2,
    nombre: "Diana",
    apellido: "Alvarez",
    email:"diana.alv@gmail.com",
    posicion: "java dev",
    empresa:"cofepris"
}
]

//Convertir el objeto creado a notación JSON y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto desde localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].nombre} con posición ${user[1].posicion}, trabaja en ${user[1].empresa}`);

//sessionStorage