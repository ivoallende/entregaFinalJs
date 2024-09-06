

class QuienReservaElTurno{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}



// function crearQuienReservaElTurno(){
//     const nombre = prompt("Ingresa tu nombre");
//     const apellido = prompt("Ingresa tu apellido");
//     const telefono = parseInt(prompt("Ingresa tu numero de telefono"));
//     const quienReserva = new QuienReservaElTurno(nombre, apellido);
//     const nombreCompleto = nombre.concat(" " + apellido);
//     const mensaje = "Bienvenido a tercer tiempo ; Muchas gracias " + nombreCompleto + " ahora te molesto con las preguntas para reservar su turno  y te mandaremos un mensaje al celular "+ telefono + " cuando terminemos de confirmar el turno"
//     alert(mensaje);
// }

const secionDeHorarios = document.createElement("section");
secionDeHorarios.className = "secionDeHorarios";
document.body.append(secionDeHorarios)

fetch(`./data.json`)
.then(respon => respon.json())
.then(data => {

function diasDeLaSemanaDisponibles(){
    
    const horarios = document.createElement("div");
    horarios.className = "horarios";

    const dia = document.createElement("p");
    dia.innerText = `El ${data.id} `
    dia.className = "dia";

    const hora = document.createElement("p");
    hora.innerText = ` ${data.horario}Hs`
    hora.className = "dia";

    const botonDeTurno = document.createElement("button");
    botonDeTurno.innerText = "Quiero este turno";

    function mensajeTurno(){
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${data.id} a las ${data.horario}Hs?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si , estoy seguro",
            cancelButtonText: "No , estoy seguro",
        }).then(result => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Tu turno de ${data.id} a las ${data.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${data.id} a las ${data.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          });
    }
    botonDeTurno.onclick = () => mensajeTurno();

    horarios.append(dia);
    horarios.append(hora);
    horarios.append(botonDeTurno);
    secionDeHorarios.append(horarios);
}

const botonLunes = document.createElement("button");
botonLunes.innerText = "Lunes";
secionDeHorarios.append(botonLunes);

function turnosParaReservarLunes(){
    function diasDisponibles(){
        data.filter(el => el.id === "lunes" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        }); 
    }
    diasDisponibles();
}
botonLunes.onclick = () => turnosParaReservarLunes();

const botonMartes = document.createElement("button");
botonMartes.innerText = "Martes";
secionDeHorarios.append(botonMartes);

function turnosParaReservarMartes(){
    function diasDisponibles(){
        data.filter(el => el.id === "martes" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
}
botonMartes.onclick = () => turnosParaReservarMartes();

const botonMiercoles= document.createElement("button");
botonMiercoles.innerText = "Miercoles";
secionDeHorarios.append(botonMiercoles);

function turnosParaReservarMiercoles(){    
    function diasDisponibles(){
        data.filter(el => el.id === "miercoles" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
}

botonMiercoles.onclick = () => turnosParaReservarMiercoles();


const botonJueves= document.createElement("button");
botonJueves.innerText = "Jueves";
secionDeHorarios.append(botonJueves);
function turnosParaReservarJueves(){
    function diasDisponibles(){
        data.filter(el => el.id === "jueves" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
}

botonJueves.onclick = () => turnosParaReservarJueves();


const botonViernes= document.createElement("button");
botonViernes.innerText = "Viernes";
secionDeHorarios.append(botonViernes);
function turnosParaReservarViernes(){


    function diasDisponibles(){
        data.filter(el => el.id === "viernes" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
}
botonViernes.onclick = () => turnosParaReservarViernes();



const botonSabado= document.createElement("button");
botonSabado.innerText = "Sabado";
secionDeHorarios.append(botonSabado);
function turnosParaReservarSabados(){

    
    function diasDisponibles(){
        data.filter(el => el.id === "sabado" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
}

botonSabado.onclick = () => turnosParaReservarSabados();

const botonDomingo= document.createElement("button");
botonDomingo.innerText = "Domingo";
secionDeHorarios.append(botonDomingo);

function turnosParaReservarDomingos(){
    function diasDisponibles(){
        data.filter(el => el.id === "domingo" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
}
botonDomingo.onclick = () => turnosParaReservarDomingos();
});


function diasYHorarios(){
    const turnoDelLunes = document.createElement("p");
    turnoDelLunes.className = "diaDeLaSemana";
    turnoDelLunes.innerText = "Lunes";
    
    const botonLunes = document.createElement("button");
    botonLunes.innerText = "Horario disponibles";
    botonLunes.addEventListener("click", () => turnosParaReservarLunes());
    
    const turnoDelMartes = document.createElement("p");
    turnoDelMartes.className = "diaDeLaSemana";
    turnoDelMartes.innerText = "Martes";
    
    
    const botonMartes = document.createElement("button");
    botonMartes.innerText = "Horario disponibles";
    botonMartes.addEventListener("click", () => turnosParaReservarMartes())
    
    const turnoDelMiercoles = document.createElement("p");
    turnoDelMiercoles.className = "diaDeLaSemana";
    turnoDelMiercoles.innerText = "Miercoles";
    
    const botonMiercoles = document.createElement("button");
    botonMiercoles.innerText = "Horario disponibles";
    botonMiercoles.addEventListener("click", () => turnosParaReservarMiercoles())
    
    const turnoDelJueves = document.createElement("p");
    turnoDelJueves.className = "diaDeLaSemana";
    turnoDelJueves.innerText = "Jueves";
    
    const botonJueves = document.createElement("button");
    botonJueves.innerText = "Horario disponibles";
    botonJueves.addEventListener("click", () => turnosParaReservarJueves())
    
    const turnoDelViernes = document.createElement("p");
    turnoDelViernes.className = "diaDeLaSemana";
    turnoDelViernes.innerText = "Viernes";
    
    const botonViernes = document.createElement("button");
    botonViernes.innerText = "Horario disponibles";
    botonViernes.addEventListener("click", () => turnosParaReservarViernes())
    
    const turnoDelSabado = document.createElement("p");
    turnoDelSabado.className = "diaDeLaSemana";
    turnoDelSabado.innerText = "Sabado";
    
    const botonSabado = document.createElement("button");
    botonSabado.innerText = "Horario disponibles";
    botonSabado.addEventListener("click", () => turnosParaReservarSabados())
    
    const turnoDelDomingo = document.createElement("p");
    turnoDelDomingo.className = "diaDeLaSemana";
    turnoDelDomingo.innerText = "Domingo";
    
    const botonDomingo = document.createElement("button");
    botonDomingo.innerText = "Horario disponibles";
    botonDomingo.addEventListener("click", () => turnosParaReservarDomingos())
    
    document.body.append(turnoDelLunes,botonLunes,turnoDelMartes,botonMartes,turnoDelMiercoles,botonMiercoles,turnoDelJueves,botonJueves,turnoDelViernes,botonViernes,turnoDelSabado,botonSabado,botonDomingo,turnoDelDomingo);
}
