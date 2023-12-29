const emailInput = document.getElementById("email")
const submitButton = document.getElementById("btn-submit");
const emailREGEX = /^[\w.+\-]+@gmail\.com$/; //Regular expression determinan patrones que se deben cumplir

//Deshabilitar el botón
submitButton.disabled = true;

/*
Evento para input, el cual evaluará el patrón de expresión regular y en caso de cumplir con el patrón, habilitará el botón y podremos ser redirigidos a la página dindex.html
--Se obtiene el valor acutal del caso email (input) usando e.target.
--Se evalúa la REGEX
*/
emailInput.addEventListener("input", (e)=>{
    const text = e.target.value;
    if(emailREGEX.test(text)== true) {
        submitButton.disabled = false;
    }
})

