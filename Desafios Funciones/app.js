
let  precio =0;
let iva = 0;
let resultado=0;

valor();
iva2();
producto(precio,iva);

function valor (){
    precio = prompt("ingrese el precio al costo del producto");
    return precio;
}

//console.log(precio);

function iva2 (){
    iva = prompt("ingrese el IVA del producto");
    return iva;
}

//console.log(iva);

function producto (p,i){
    resultado=parseInt(p) * (parseInt(i)+100)/100;
    alert("el precio con iva es: " + resultado);
    //return resultado;
}



