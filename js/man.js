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

//cree el boton de envio del formulario y en la linea de abajo lo agrege al form

formDeInputs.append(inputNombre);
formDeInputs.append(inputApellido);
formDeInputs.append(inputNumero);
formDeInputs.append(botonDeFormulario);
document.body.append(formDeInputs);



function diasDeLaSemanaDisponibles(){

    const horarios = document.createElement("div");
    horarios.className = "horarios";

    const dia = document.createElement("p");
    dia.innerText = `El ${id} `
    dia.className = "dia";

    const hora = document.createElement("p");
    hora.innerText = ` ${horario}Hs`
    hora.className = "dia";

    const botonDeTurno = document.createElement("button");
    botonDeTurno.innerText = "Quiero este turno";

    function mensajeTurno(){
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${id} a las ${horario}Hs?`,
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
                    title: `Tu turno de ${id} a las ${horario}Hs fue reservado con exito`,
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

function mensajeTurno(){
    Swal.fire({
        title: `Estas seguro de reservar el turno del ${id} a las ${horario}Hs?`,
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
                title: `Tu turno de ${id} a las ${horario}Hs fue reservado con exito`,
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
      })};

fetch(`./data.json`)
.then(respon => respon.json())
.then(data => {
    console.log(data);
    localStorage.clear();
    let turnoReservado = [];

    if(localStorage.getItem("turnoReservado")){
        turnoReservado = JSON.parse(localStorage.getItem("turnoReservado"));
    }else{
        turnoReservado = [];
    }

    function diasYHorarios(){
        const container = document.createElement('div');
        container.className = "container";

        const turnoDelLunes = document.createElement("p");
        turnoDelLunes.className = "diaDeLaSemana";
        turnoDelLunes.innerText = "Lunes";
        
        const botonLunes = document.createElement("button");
        botonLunes.innerText = "Horario disponibles";
        botonLunes.addEventListener("click", () => funcionDeDiaLunes());
        
        const turnoDelMartes = document.createElement("p");
        turnoDelMartes.className = "diaDeLaSemana";
        turnoDelMartes.innerText = "Martes";
        
        
        const botonMartes = document.createElement("button");
        botonMartes.innerText = "Horario disponibles";
        botonMartes.addEventListener("click", () => funcionDeDiaMartes())
        
        const turnoDelMiercoles = document.createElement("p");
        turnoDelMiercoles.className = "diaDeLaSemana";
        turnoDelMiercoles.innerText = "Miercoles";
        
        const botonMiercoles = document.createElement("button");
        botonMiercoles.innerText = "Horario disponibles";
        botonMiercoles.addEventListener("click", () => funcionDeDiaMiercoles())
        
        const turnoDelJueves = document.createElement("p");
        turnoDelJueves.className = "diaDeLaSemana";
        turnoDelJueves.innerText = "Jueves";
        
        const botonJueves = document.createElement("button");
        botonJueves.innerText = "Horario disponibles";
        botonJueves.addEventListener("click", () => funcionDeDiaJueves())
        
        const turnoDelViernes = document.createElement("p");
        turnoDelViernes.className = "diaDeLaSemana";
        turnoDelViernes.innerText = "Viernes";
        
        const botonViernes = document.createElement("button");
        botonViernes.innerText = "Horario disponibles";
        botonViernes.addEventListener("click", () => funcionDeDiaViernes())
        
        const turnoDelSabado = document.createElement("p");
        turnoDelSabado.className = "diaDeLaSemana";
        turnoDelSabado.innerText = "Sabado";
        
        const botonSabado = document.createElement("button");
        botonSabado.innerText = "Horario disponibles";
        botonSabado.addEventListener("click", () => funcionDeDiaSabados())
    
        const turnoDelDomingo = document.createElement("p");
        turnoDelDomingo.className = "diaDeLaSemana";
        turnoDelDomingo.innerText = "Domingo";
        
        const botonDomingo = document.createElement("button");
        botonDomingo.innerText = "Horario disponibles";
        botonDomingo.addEventListener("click", () => funcionDeDiaDomingos())
        
        botonDomingo.onclick = () => turnosParaReservarLunes(data);
        container.append(turnoDelLunes,botonLunes,turnoDelMartes,botonMartes,turnoDelMiercoles,botonMiercoles,turnoDelJueves,botonJueves,turnoDelViernes,botonViernes,turnoDelSabado,botonSabado,turnoDelDomingo,botonDomingo,);
        document.body.append(container);
        
    }
    formDeInputs.addEventListener ("submit", (e) => {
        e.preventDefault();
        const texto = document.createElement("p");
        texto.innerText = `Bienvenido ${inputNombre.value}${inputApellido.value}
        te enviaremos un mensaje al siguiente numero de telefono: ${inputNumero.value} para que puedas mandar el comprobante se la seña cuando finalice la reserva de turno, Muchas gracias!`;
    
        document.body.append(texto);
        diasYHorarios();
    });

    const arrayDeTurnos = data;

        
    
    function funcionDeDiaLunes(){
    
    let lunesLimpio = arrayDeTurnos.filter(el => el.id === "lunes" && el.reservado === false);
    lunesLimpio.forEach(el => {
    const diaLunes = document.createElement("p");
    diaLunes.className = "Dia";
    diaLunes.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    
    horarioDisponible.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${el.id} a las ${el.horario}Hs?`,
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
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750,
                });
                turnoReservado.push(`${el.id} a las ${el.horario}Hs`);
                localStorage.setItem("turno" ,JSON.stringify(turnoReservado));

            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    }); 

    document.body.append(diaLunes,horario,horarioDisponible);

    
})

}

//martes

function funcionDeDiaMartes(){
    
    let lunesLimpio = arrayDeTurnos.filter(el => el.id === "martes" && el.reservado === false);
    lunesLimpio.forEach(el => {
    const diaMartes = document.createElement("p");
    diaMartes.className = "Dia";
    diaMartes.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    
    horarioDisponible.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${el.id} a las ${el.horario}Hs?`,
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
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                turnoReservado.push(`${el.id} a las ${el.horario}Hs`);
                localStorage.setItem("turno" ,JSON.stringify(turnoReservado));
            }

            
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    }); 

    document.body.append(diaMartes,horario,horarioDisponible);
})
}
    



//Miercoles

function funcionDeDiaMiercoles(){
    
    let lunesLimpio = arrayDeTurnos.filter(el => el.id === "miercoles" && el.reservado === false);
    lunesLimpio.forEach(el => { 
    const diaMiercoles = document.createElement("p");
    diaMiercoles.className = "Dia";
    diaMiercoles.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    
    horarioDisponible.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${el.id} a las ${el.horario}Hs?`,
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
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                turnoReservado.push(`${el.id} a las ${el.horario}Hs`);
                localStorage.setItem("turno" ,JSON.stringify(turnoReservado));
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    }); 

    document.body.append(diaMiercoles,horario,horarioDisponible);
})
}

//jueves

function funcionDeDiaJueves(){
    
    let lunesLimpio = arrayDeTurnos.filter(el => el.id === "jueves" && el.reservado === false);
    lunesLimpio.forEach(el => { 
    const diaJueves = document.createElement("p");
    diaJueves.className = "Dia";
    diaJueves.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    
    horarioDisponible.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${el.id} a las ${el.horario}Hs?`,
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
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                turnoReservado.push(`${el.id} a las ${el.horario}Hs`);
                localStorage.setItem("turno" ,JSON.stringify(turnoReservado));
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    }); 

    document.body.append(diaJueves,horario,horarioDisponible);
})
}

//viernes

function funcionDeDiaViernes(){
    
    let lunesLimpio = arrayDeTurnos.filter(el => el.id === "viernes" && el.reservado === false);
    lunesLimpio.forEach(el => { 
    const diaViernes = document.createElement("p");
    diaViernes.className = "Dia";
    diaViernes.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    
    horarioDisponible.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${el.id} a las ${el.horario}Hs?`,
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
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                turnoReservado.push(`${el.id} a las ${el.horario}Hs`);
                localStorage.setItem("turno" ,JSON.stringify(turnoReservado));
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    }); 

    document.body.append(diaViernes,horario,horarioDisponible);
})
}

//sabado

function funcionDeDiaSabados(){
    
    let lunesLimpio = arrayDeTurnos.filter(el => el.id === "sabado" && el.reservado === false);
    lunesLimpio.forEach(el => { 
    const diaSabado = document.createElement("p");
    diaSabado.className = "Dia";
    diaSabado.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    
    horarioDisponible.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${el.id} a las ${el.horario}Hs?`,
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
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                turnoReservado.push(`${el.id} a las ${el.horario}Hs`);
                localStorage.setItem("turno" ,JSON.stringify(turnoReservado));
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    }); 

    document.body.append(diaSabado,horario,horarioDisponible);
})
}

//domingo

function funcionDeDiaDomingos(){
    
    let lunesLimpio = arrayDeTurnos.filter(el => el.id === "domingo" && el.reservado === false);
    lunesLimpio.forEach(el => { 
    const diaDomingo = document.createElement("p");
    diaDomingo.className = "Dia";
    diaDomingo.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    
    horarioDisponible.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de reservar el turno del ${el.id} a las ${el.horario}Hs?`,
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
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue reservado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                turnoReservado.push(`${el.id} a las ${el.horario}Hs`);
                localStorage.setItem("turno" ,JSON.stringify(turnoReservado));
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno de ${el.id} a las ${el.horario}Hs fue cancelado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    }); 

    document.body.append(diaDomingo,horario,horarioDisponible);
})
}


const mostrar = document.createElement("button");
    mostrar.innerText = "Ver mi turno";
    document.body.append(mostrar);
    mostrar.addEventListener("click", () =>{
        let turnoReservado = document.createElement("p");
        turnoReservado.innerText = JSON.parse(localStorage.getItem("turno"));
        document.body.append(turnoReservado);
        
    })
    const borrar = document.createElement("button");
    borrar.innerText = "Borrar turno";
    document.body.append(borrar);
    borrar.addEventListener("click", () => {
        Swal.fire({
            title: `Estas seguro de borrar tu turno?`,
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
                    title: `Tu turno fue borrado con exito`,
                    showConfirmButton: false,
                    timer: 1750
                });
                localStorage.removeItem("turno");
            }
            else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `Tu turno sigue en pie`,
                    showConfirmButton: false,
                    timer: 1750
                });
                
            }
          })
    })
});
function turnoDeLosLunes(){
    const diaLunes = document.createElement("p");
    diaLunes.className = "Dia";
    diaLunes.innerText = `Dia: ${el.id}`;
    
    const horario = document.createElement("p");
    horario.innerText = `Horario: ${el.horario}`;

    const horarioDisponible = document.createElement("Button");
    horarioDisponible.innerText = "Reservar";
    document.body.append(diaLunes);
    document.body.append(horario);
}

function turnosParaReservarLunes(data){
    function diasDisponibles(data){
        data.filter(el => el.id === "lunes" && el.reservado === false).forEach(el => {
            diasDeLaSemanaDisponibles(el);
        }); 
    }
}