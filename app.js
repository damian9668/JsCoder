
let resultado = 0;

for (let x=0; x=4;x++){

    let i = prompt("ingrese un numero");
    if(i == "esc"){
        break;
    };
    resultado = resultado + parseInt(i);
    alert("la suma parcial es " + resultado);
    if(x >= 3){
        x--;
    };
}

alert("la suma total es: " + resultado)


