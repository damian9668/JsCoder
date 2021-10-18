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

let condicion = "";

while(condicion !== "esc"){
    let nombre = prompt("ingrese el nombre del alumno, para salir ingrese esc");
    if(nombre == "esc"){
        condicion = "esc";
        break;
    }
    let fecha = prompt("ingrese La Fecha de nacimiento del alumno");
    let notas = prompt("ingrese las notas separadas por ',' ");

    notas = notas.split(",")

    create(nombre, fecha, notas);

}


let listaAlumnos = "";
for (const alumno of alumnos){
    listaAlumnos += alumno.nombre + '  ' + alumno.fecha + '  ' + alumno.notas.join() + '\n';
}
alert("Los Alumnos son: \n"+listaAlumnos);


//console.log(alumnos);