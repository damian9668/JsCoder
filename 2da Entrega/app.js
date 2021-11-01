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
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let notas = document.getElementById("notas").value;

    notas = notas.split(",")

    create(nombre, fecha, notas);
    console.log(alumnos);
    document.getElementById("formulario").reset();
}

function verAlumnos() {
    alumnos.forEach((alumno) => {
        let item = document.createElement("div");

        item.classList.add("card");
        item.classList.add("col-4");
        item.classList.add("m-3");
        item.classList.add("mx-auto")
        item.style.width = "25rem";
        item.innerHTML = `<div class="card-body">
                            <h5 class="card-title"> Nombre: ${alumno.nombre}</h5>
                             <p class="card-text my-2"> Fecha: ${alumno.fecha}</p>
                             <p class="card-text my-2"> Notas: ${alumno.notas}</p>              
                           </div>`
        document.getElementById("mostrar").appendChild(item);
    });
}

let botonCarga = document.getElementById("btnAgregar");
botonCarga.addEventListener("click", cargarAlumnos);

let botonVer = document.getElementById("btnVer");
botonVer.addEventListener("click", verAlumnos);



