const URL = "https://jsonplaceholder.typicode.com/users";
class Alumno {
    constructor(nombre, correo, telefono, direccion, codigo) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.codigo = codigo;
    }
}

const alumnos = [];

const create = (nombre, correo, telefono, direccion, codigo) => {

    alumnos.push(new Alumno(nombre, correo, telefono, direccion, codigo));
}

function cargarAlumnos() {
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let telefono = $("#telefono").val();
    let direccion = $("#direccion").val();
    let codigo = $("#codigo").val();


    if(!nombre || !correo || !telefono || !direccion || !codigo){
        $("#alerta2").fadeIn("slow",function() {
            setTimeout(function () {
                $("#alerta2").fadeOut("slow");
            }, 1000);
        })
        return;
    }
    create(nombre, correo, telefono, direccion, codigo);
    //console.log(alumnos);
    $("#formulario").trigger('reset');
    $("#alerta").fadeIn("slow",function() {
        setTimeout(function () {
            $("#alerta").fadeOut("slow");
        }, 1000);
    })
}

function verAlumnos() {
    
    $("#mostrar").empty();
    alumnos.forEach((alumno) => {
        $("#mostrar").prepend(`<div class='card col-4 m-3 mx-auto' style='width: 25rem'>
    <div class="card-body" id="carta">
        <h5 class="card-title"> Nombre: ${alumno.nombre}</h5>
        <p class="card-text my-2"> Correo: ${alumno.correo}</p>
        <p class="card-text my-2"> Telefono: ${alumno.telefono}</p>
        <p class="card-text my-2"> Direccion: ${alumno.direccion}</p>
        <p class="card-text my-2"> Codigo Postal: ${alumno.codigo}</p>
    </div>
</div>`);
    });
    alumnosApi();
}

function alumnosApi(){
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
};

alumnosApi();
$("#btnAgregar").click(cargarAlumnos);
$("#btnAgregar").click(verAlumnos);





