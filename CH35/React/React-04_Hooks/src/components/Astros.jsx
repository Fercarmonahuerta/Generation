import './Astros.css';
import { useEffect, useState } from 'react';
import Astro from './Astro';

//Función para crear cards (tarjetas) donde vivirá la información de la API

//Mandar a llamar la api, utilizando hooks (useState y useEfect)
//Función para agregar la información de la API Astros dentro de las cards
const Astros = () => {
    //Definir la URL de la API 
    const ASTROS_URL ='http://api.open-notify.org/astros.json';

    //Implementando useState
    const [astros, setAstros] = useState([]);

    //Imprlementando useEffect
    useEffect(() => {
        fetchAstros(); //Hoisting de una función que voy a definir
    }, []);

    //Crear función fetch para conectarse a la API 
    const fetchAstros = () => {
        fetch(ASTROS_URL)
            .then(response => response.json())
            .then(data => setAstros(data.people))//Para que la información viva dentro del componente actualizado, traigo setAstros  le paso los datos de 'people' de la API.
            .catch(error => console.error(error))
    }
    console.log(astros); //Vive en consola del navegador
    //Enviar la información de la API  en las cards, usando .map sobre el array 'astros'
    return(
        <>
        {
            //astro funciona como los elementos que se recorren en el array 'astros' y .map recibe dichos elementos más un index y una función tipo callback
            astros.map((astro, index) =>(
                    //Exporto el componente Astro
                    //Crear una llave única para cada elemento del array (key)
                    //Desestructurar el array paraque cada elemento reciba los props definidos dentro del Astro ({name, craft})
                    <Astro key={index} {...astro} />
            ))
        }
        </>
    )
}

export default Astros