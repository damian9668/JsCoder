
class Producto{
    constructor(nombreProd, precio){
        this.nombreProd = nombreProd.toLowerCase();
        this.precio = precio;
    }
}

const productos = [];

const create = (nombre, precio)=>{
    productos.push(new Producto(nombre, precio));
}

let condicion = "verdadero";

while(condicion !== "esc"){
    let nombre = prompt("ingrese el nombre del Producto, para salir ingrese esc");
    if(nombre == "esc"){
        condicion = "esc";
        break;
    }
    let precio = prompt("ingrese el precio de producto");
    create(nombre, precio);

}
const productosOrdenados = productos.sort((a,b)=>{
    return a.precio - b.precio;
})

let listaProductos = "";
for (const producto of productosOrdenados){
    listaProductos += producto.nombreProd + ': ' +producto.precio + '\n';
}
alert("Los Productos Ordenados Por Precio Serian: \n"+listaProductos);

//console.log(productosOrdenados);