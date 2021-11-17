class Alumno {
    constructor(nombre, fechaDeNacimiento, notas) {
        this.nombre = nombre.toUpperCase();
        this.fecha = fechaDeNacimiento;
        this.notas = notas;
    }
}

const alumnos = [];

const create = (nombre, fechaDeNacimiento, notas) => {
    alumnos.push(new Alumno(nombre, fechaDeNacimiento, notas));
}

function cargarAlumnos() {
    let nombre = $("#nombre").val();
    let fecha = $("#fecha").val();
    let notas = $("#notas").val();

    notas = notas.split(",")

    create(nombre, fecha, notas);
    //console.log(alumnos);
    $("#formulario").trigger('reset');
    $("#alerta").fadeIn("slow",function() {
        setTimeout(function () {
            $("#alerta").fadeOut("slow");
        }, 1000);
    })
}

function verAlumnos() {
    //console.log("estoy en alumnos");
    alumnos.forEach((alumno) => {
        $("#mostrar").append(`<div class='card col-4 m-3 mx-auto' style='width: 25rem'>
    <div class="card-body" id="carta">
        <h5 class="card-title"> Nombre: ${alumno.nombre}</h5>
        <p class="card-text my-2"> Fecha: ${alumno.fecha}</p>
        <p class="card-text my-2"> Notas: ${alumno.notas}</p>
    </div>
</div>`);
    });
}

$("#btnAgregar").click(cargarAlumnos);
$("#btnVer").click(verAlumnos);



