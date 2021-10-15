
function Credito() {
    this.monto = prompt("ingrese el monto a solicitar");
    this.cuotas = prompt("ingrese la cantidad de cuotas");
    this.interes = prompt("ingrese el interes total en porcentaje");
    this.resultado = function(){
        resultado=((parseFloat(this.monto) * ((parseFloat(this.interes) + 100)/100))/this.cuotas).toFixed(2);
        alert("usted pagara una cuota fija de: " + resultado);
    }
}
const credito1 = new Credito();

credito1.resultado();

