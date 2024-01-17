import {Link} from "react-router-dom"
const SobreNosotros = () => {
    return (
        <>
         <div>
            <h1>Esta es la página Sobre Nosotros</h1>
        </div>
        <Link to="/">
        Presiona aquí para la página de Inicio
        </Link>
        <br/>
        <Link to="Contacto">
        Presiona aquí para la página Contacto
        </Link>
        </>
    )
}

export default SobreNosotros