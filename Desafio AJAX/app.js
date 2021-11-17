const URL = "https://jsonplaceholder.typicode.com/users";

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

$("#btnPrueba").click(()=>{

    $.ajax({
        method: "GET",
        url: URL,
        success: (data)=>{
            //console.log(data);
            data.forEach((alumno) => {
                $("#mostrar").append(`<div class='card col-4 m-3 mx-auto' style='width: 25rem'>
    <div class="card-body" id="carta">
        <h5 class="card-title"> Nombre: ${alumno.name}</h5>
        <p class="card-text my-2"> Correo: ${alumno.email}</p>
        <p class="card-text my-2"> Telefono: ${alumno.phone}</p>
        <p class="card-text my-2"> Direccion: ${alumno.address.city}, ${alumno.address.street}, ${alumno.address.suite}</p>
        <p class="card-text my-2"> Codigo Postal: ${alumno.address.zipcode}</p>
    </div>
</div>`);
            });
        }
    })

})

