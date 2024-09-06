//function para ver los dias disponibles
const formDeInputs = document.createElement("form");
formDeInputs.className = "formDeInputs";

const inputNombre = document.createElement("input");
inputNombre.className = "inputs";
inputNombre.placeholder = "Ingrese su nombre";
inputNombre.type = "text";
//cree el input para ingresar el nombre y la linea de abajo lo agreger dentro del form
localStorage.setItem(`nombre`, inputNombre.value);

const inputApellido = document.createElement("input");
inputApellido.placeholder = "Ingrese su apellido";
inputApellido.className = "inputs";
inputApellido.type = "text";
//cree el input para ingresar el apellido y la linea de abajo lo agreger dentro del form
const inputNumero = document.createElement("input");
inputNumero.className = "inputs";
inputNumero.placeholder = "Ingrese su numero de telefono";
inputNumero.type = "number";
//cree el input para ingresar el numero de telefono y la linea de abajo lo agrege dentro del form

const botonDeFormulario = document.createElement("input");
botonDeFormulario.type = "submit";
botonDeFormulario.className = "botonDeFormulario";
botonDeFormulario.value = "Enviar formulario"
formDeInputs.addEventListener ("submit", (e) => {
    e.preventDefault();
    const texto = document.createElement("p");
    texto.innerText = `Nombre: ${inputNombre.value}, Apellido: ${inputApellido.value}, Telefono: ${inputNumero.value}`;
});
//cree el boton de envio del formulario y en la linea de abajo lo agrege al form

formDeInputs.append(inputNombre);
formDeInputs.append(inputApellido);
formDeInputs.append(inputNumero);
formDeInputs.append(botonDeFormulario);
document.body.append(formDeInputs);

let sacarTurno = 0;
const cantidadDeTurnos = 1;    
// if (cantidadDeTurnos > sacarTurno){
// botonDeFormulario.addEventListener("click", () => 
//     {
//     const mensajeDeTexto = document.createElement("p");
//     mensajeDeTexto.innerText = "Gracias por elegirnos " + inputNombre.value 
//     document.body.append(mensajeDeTexto);
//     diasYHorarios();
// }
// )
// };