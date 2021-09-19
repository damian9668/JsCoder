

var x, y, suma;

x = prompt("Ingrese un numero");
y = prompt("Ingrese un numero");

if (isNaN(x) || isNaN(y)) {
    alert("Es necesarios introducir dos números válidos");
} else {
    //si no ponemos parseFloat concatenaría x con y
    suma = parseFloat(x) + parseFloat(y);
    alert("El resultado de la suma es " + suma);
}

