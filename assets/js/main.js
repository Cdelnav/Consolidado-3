var listaDeProductos = [
    new Producto("Leche", 1000),
    new Producto("Pan de molde", 2000),
    new Producto("Queso", 1200),
    new Producto("Mermelada", 890),
    new Producto("Azucar", 1300),
];

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function Carro() {
    this.productos = [];
    
    this.mostrarLista = function(){
        alert(`"!!Bienvenidos a Cdelnav Market¡¡ 
        \nEstos son nuestros productos disponibles: 
        \nCód Producto Precio\n1.-    Leche      $1000\n2.-    Pan          $2000\n3.-    Queso     $1200\n4.-    Mermelada $890\n5.-    Azúcar    $1300"`);
       
    }

    // agrega productos a carro
    this.agregaProductos = function(producto, cantidad) {
        this.productos.push({producto, cantidad});
    }

    //muestra productos agregados al carro
    this.mostrarDetalle = function(){
        for (var i = 0; i < this.productos.length; i++) {
            var element = this.productos[i];
            var detalle = "Detalle de la compra: \n"+ element.cantidad + " "+element.producto.nombre+"(s) agregado(s) al carro";
            
        }
        return alert(detalle);
    }

    // calculo de total de productos agregados al carro
    this.calculoTotal = function(){
        var total = 0;
        for (var i = 0; i < this.productos.length; i++) {
            var element = this.productos[i];
            total += element.producto.precio * element.cantidad;
            
        }
        return total;
    }

    //muestra el total de la compra a pagar
    this.vistaTotal = function (){
        var totalPagar = "Total a pagar: $" +this.calculoTotal();
        return alert(totalPagar);

    }

    this.mostrarDetalleTotal = function () {
        return this.productos
          .map(function (element) {
            return `${
                element.cantidad
            } x ${element.producto.nombre} - $${element.producto.precio * element.cantidad}`;
        })
        .join("<br>");
      };

    //finaliza la compra y muestra mensaje final de agradecimiento
    this.terminoCompra = function () {
        this.vistaTotal();
        this.productos = [];
        alert("Gracias por Preferirnos \nHasta Pronto!!");

    }

}



var carro = new Carro();

function Inicio(){
    carro.mostrarLista();

    var Opciones = parseInt(prompt("Ingresa el Código del producto que quieres comprar:"))-1;

    if (!listaDeProductos[Opciones]) {
        alert("Debes escoger entre las opciones mostradas \nIntentalo nuevamente");
        Inicio();
        return;
    }else{
        var ingresaCant = prompt("¿Cuantos quieres comprar?");
        if (ingresaCant <= 0 || ingresaCant === "" || isNaN(ingresaCant)) {
            alert("Ingresa al menos 1 unidad");
            Inicio();
            return;
        }else{
            parseInt(ingresaCant);
            var productoSeleccionado = listaDeProductos[Opciones];
            carro.agregaProductos(productoSeleccionado, ingresaCant);
            carro.mostrarDetalle();
            var continuarComprando = prompt("¿Continuar Comprando? (s/n)");
            if (continuarComprando.toLowerCase() === "s") {
                Inicio();
            }else{
                if (continuarComprando.toLowerCase() == "n") {
                    carro.mostrarDetalleTotal();
                    carro.terminoCompra();
                }else{
                    alert("Debes escoger una opción válida");
                    carro.productos.pop();
                    Inicio();
                }
                
            }
        }
    }


}
Inicio();