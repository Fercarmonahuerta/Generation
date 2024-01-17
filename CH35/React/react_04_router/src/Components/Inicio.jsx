import {Link} from "react-router-dom"
const Inicio = () => {
    return (
        <>
        <div>
            <h1>Esta es la página de Inicio</h1>
            <Link to= "SobreNosotros">
                Presiona aquí para ir a la página Sobre Nosotros
            </Link>
            <br/>
            <Link to= "Contacto">
            Presiona aquí para ir a la página de Contacto
            </Link>
            
        </div>
        </>
    )
}
export default Inicio