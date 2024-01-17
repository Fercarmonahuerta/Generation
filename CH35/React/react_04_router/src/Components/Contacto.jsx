import {Link} from "react-router-dom"
const Contacto = () => {
    return(
        <>
         <div>
            <h1>Esta es la página de Contacto</h1>
        </div>
        <Link to="Nosotros">
        Presiona aquí para la página Sobre Nosotros
        </Link>
        <br/>
        <Link to="Contacto">
        Presiona aquí para la página Contacto
        </Link>
        </>
    )
}

export default Contacto