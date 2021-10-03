
let monto = prompt("ingrese el monto a solicitar");
let cuotas = prompt("ingrese la cantidad de cuotas");
let interes = prompt("ingrese el interes total en porcentaje");
let resultado =0;

credito(monto,cuotas,interes);

function credito (monto,cuotas,interes){
    resultado=((parseFloat(monto) * ((parseFloat(interes) + 100)/100))/cuotas).toFixed(2);
    alert("usted pagara una cuota fija de: " + resultado);
}
