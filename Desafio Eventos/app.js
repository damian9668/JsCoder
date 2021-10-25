class Alumno{
    constructor(nombre, fechaDeNacimiento, notas ){
        this.nombre = nombre.toUpperCase();
        this.fecha = fechaDeNacimiento;
        this.notas = notas;
    }
}

const alumnos = [];

const create = (nombre, fechaDeNacimiento, notas)=>{
    alumnos.push(new Alumno(nombre, fechaDeNacimiento, notas));
}

function cargarAlumnos(){
    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("fecha").value;
    let notas = document.getElementById("notas").value;

    notas = notas.split(",")

    create(nombre, fecha, notas);
    console.log(alumnos);
    document.getElementById("formulario").reset();
}

function verAlumnos(){
    alumnos.forEach((alumno)=>{
        let item = document.createElement("li");
        item.innerHTML = `Nombre: ${alumno.nombre} -- Fecha: ${alumno.fecha} -- Nota: ${alumno.notas}`;
        //item.innerHTML = JSON.stringify(alumno);
        document.getElementById("mostrar").appendChild(item);
    });
}

let botonCarga = document.getElementById("btnAgregar");
botonCarga.addEventListener("click",cargarAlumnos);

let botonVer = document.getElementById("btnVer");
botonVer.addEventListener("click", verAlumnos);



