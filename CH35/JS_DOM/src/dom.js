/* MANIPULACIÓN DEL DOM
-Leer y traer nodos del árbol del DOM
    document.getElementsById (trae elementos por id)
    document.getElementsByClassName (trae elementos por clase)
    document.getElementsByTagName (trae elementos por etiquetas)
 */
//Get element by ID
const título = document.getElementById("title1")
console.log(título);
console.log(título.innerText); //trae el texto que vive en mi ID

//Elementos por nombre de Clase
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); //Devuelve la longitud de elementos de la clase.
console.log(typeof titulos); // Muestra que es un objet porque es una colección de arrays

//Elements by tag Name
const tituloH3 = document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*Métodos para llamar elementos mediante selectores de CSS
Se usa para procesos más específicos y la sintaxis es querySelector 
- document.querySelectro("selector"); //#, ., <>
- document.querySelecttorAll(). Seleccionar cualquier elemento que se especifique
Siempre vana a traer el primer elemento con el selector indicado 
*/
//Query Select
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector(".title");
console.log(queryClass); // Solo devolvió el primer elemento

//Query Selector All ==> Imprime todo el array
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con jS
título.style.textAlign = "center";
título.style.color = "#5058F2";

//Manipular el texto de un elemento
const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de Manipulación del DOM-CH35";
titulo2.style.color = "#F23D3D";

/* Métodos para crear y agregar elemento en el DOM 
Este proceso se divide en dos partes: 1. Crear el nodo y agregar el nodo
    - Crear nodos
        document.createElement("element") --> Crea elemnetos a partir de etiquetas
    - document.creatTextNode("Texto") --> Crea texto dentro de las etiquetas.
*/
const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

/* Agregar nodos: Mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado
        -parentElement.appendChild(constante);
        -parentElement.append(const);
        -parentElement.insertBefore(const);
        -parentElement.insertAdjacentElement(const);
    utilizarresmos mayormente appendchild
*/

//otengo el elemento padre por tag, class o id
const parentElement = document.getElementById("dif"); //aqui defini el elemento padre
//Agregar texto que vivirá en el nodo 1
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");
//Inserto el texto desde el nodo1
nodo1.appendChild(textNodo1); //
//Insertar nodo1 en le elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily ="'Karla', sans-serif";
parentElement.style.color = "#A62F03";
/* Agregando Imagen
Inserto el nodo en imgNodo en el elmento padre para definirlo posteriormente
*/
parentElement.appendChild(imgNodo);
//Acedo a las propiedades de la imagen
imgNodo.src = "https://octodex.github.com/images/femalecodertocat.png"; //../srcassets/octocat.jpg
imgNodo.alt = "Octocat-github";
imgNodo.width = "300";

/* otra forma de leer y modificar nodos
    document.outerHTML /(leer)
    node.innerHTML (escribir sobre el nodo)
*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulación del DOM - CH35";

