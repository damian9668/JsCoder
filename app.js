const URL = "https://jsonplaceholder.typicode.com/users";

class Alumno {
    constructor(nombre, correo, telefono, direccion, codigo, notas) {
        this.name = nombre;
        this.email = correo;
        this.phone = telefono;
        this.address = direccion;
        this.zipcode = codigo;
        this.notas = notas
    }
}

const alumnos = [];

const create = (nombre, correo, telefono, direccion, codigo, notas) => {

    alumnos.push(new Alumno(nombre, correo, telefono, direccion, codigo, notas));
}

function cargarAlumnos() {
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let telefono = $("#telefono").val();
    let direccion = $("#direccion").val();
    let codigo = $("#codigo").val();
    let notas = $("#notas").val();

    notas = notas.split(",")


    if(!nombre || !correo || !telefono || !direccion || !codigo || notas[0]===""){
        $("#alerta2").fadeIn("slow",function() {
            setTimeout(function () {
                $("#alerta2").fadeOut("slow");
            }, 1000);
        })
        return;
    }
    create(nombre, correo, telefono, direccion, codigo, notas);
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
        <h5 class="card-title"> Nombre: ${alumno.name}</h5>
        <p class="card-text my-2"> Correo: ${alumno.email}</p>
        <p class="card-text my-2"> Telefono: ${alumno.phone}</p>
        <p class="card-text my-2"> Direccion: ${alumno.address}</p>
        <p class="card-text my-2"> Codigo Postal: ${alumno.zipcode}</p>
        <p class="card-text my-2"> Notas: ${alumno.notas}</p>
    </div>
</div>`);
    });
}

function alumnosApi(){
    $.ajax({
        method: "GET",
        url: URL,
        success: (data)=>{
            //console.log(data);
            data.forEach((alumno) => {
                let notas = Array.from({length: 3}, () => {
                    let nota = Math.floor(Math.random() * 11)
                    if (nota === 0) {
                        return 1;
                    } else {
                        return nota
                    }
                });
                alumnos.push(new Alumno(alumno.name, alumno.email, alumno.phone, alumno.address.city +", "+ alumno.address.street + ", " + alumno.address.suite, alumno.address.zipcode, notas));
            });
            verAlumnos();
        }
    })
};

alumnosApi();
$("#btnAgregar").click(cargarAlumnos);
$("#btnAgregar").click(verAlumnos);





