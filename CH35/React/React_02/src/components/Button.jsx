import './Button.css'

/**
 *Props. Propiedades que se pueden asignar a los componentes para modificar el texto, la informaci´n desde la rederiazaci´n del mismo.
 Se asignan como parámetro de la función con el nombre del prop y debe ir entre llaves
 *Se manda a llamar en el bloque de código donde se debe implementar (en este caso es label). utilizando llaves
 
 */
const Button = ({ label })=>{
    return (
        <>
        <button>
            {label}
        </button>
        </>
    )
}

export default Button