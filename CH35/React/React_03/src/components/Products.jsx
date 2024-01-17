import './Products.css'

/*const Products = (props)=> {}
Comenté esta línea de código porque fue la que usé para el ejemplo de props estructurados 
*/
const Products = ({img, name, description, price})=> {
    return(
        <>{/*Agregando las propiedades al componente, pero no se modifican las propiedades al importar el componente en App.jsx, se repite la misma info
        <div className="cards">
            <div className="products--card">
                <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneakers'/>
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$1959</h4>
            </div>
        </div>   */}
        {/* Props estructurados. Puedo asignar diferentes propiedades a un div, sin tener que generar muchos props solamente usando la palabra reservada 'props' como parámetro de la función
        -Quiero modificar varias propiedades, puedo mandar a llamar las props dentro de cada elemento, como si fueran métodos.
        */}


        {/*<div className="cards">
            <div className="products--card">
                <img src={props.img} alt='sneakers' />
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </div>*/}
        {/* Props desestructurados Permite asignar datos de un objeto a una variable separada para que dicha variable pueda contener los datos provenientes del objeto.
        -No utilizamos 'props' como parámetro de la funci´no, si no que asignamos parámetros a cada elemento y los llamamos directamente en dichos elementos.
        -Los props desestructurados viven como parámetros, pero entre llaves y se les asigna un nombre específico.
        */}
        <div className="cards">
            <div className="products--card">
                <img src={img} alt='sneakers' />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
        </>
    )
}

export default Products