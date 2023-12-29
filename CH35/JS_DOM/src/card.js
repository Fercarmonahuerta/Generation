/*
 para manipular la información de un usuario necesito crear un perfil mediante un objeto de js.
*/

const user = {
    username: 'Fergomina',
    age: 29,
    email: 'fernandacarmonahuerta@gmail.com',
    favfilms: ['Pulp Fiction', 'Cloud Atlas', 'Shrek', 'Harry Potter']
}

//Crear una función que me permita ingrear el objeto del perfil en el nodo padre
const createUser =(user) =>{
    document.getElementById("username").textContent = user.username; //Aqui llamo a la constante + punto para que me salga solo username y no toda la info
    document.getElementById("age").textContent = user.age;
    document.getElementById("email").textContent = user.email;
    /*mostrando elementos de lista en forma de lista
    Para mostrar el arrray en forma de lista utilizares un ciclo forEach para recorrer todo el array y traer cada elemento a la lista*/
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film =>{
        const li = document.createElement("li");
        li.textContent = film;
        ul.appendChild(li);
    
    });
    //Modificando estilos de la ul para quitar viñetas
    ul.style.listStyleType = "none";
    ul.style.padding = 0;
    ul.style.color = "#D9B70D";

    //Mostrando elemeentos de lisat en forma de fila (no nos sirve porque definimos una lista desordenada y no un párrafo)
    //document.getElementById("fav-films").textContent = user.favfilms;
}
//Invocando la funcion
createUser(user);

/*
Eventos para actualizar el username mediante el input y el botón

*/
const inputName = document.getElementById("name");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
});