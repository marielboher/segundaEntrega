// simulador de cuotas

// El profe nos explicó que no debemos usar JavaScript en HTML. Lo hecho en este proyecto es solo una excepción.

const productos = [
    { nombre: "AURICULARES INALAMBRICOS LENOVO NEGRO", color: "NEGRO", precio: "7400", stock: "1", id: 1, marca: "LENOVO", imagen: "/multimedia/aurislenovo.webp" },
    { nombre: "AURICULARES IN EAR QCY T1C INALAMBRICOS BLANCO XIAOMI", color: "BLANCO", precio: "8000", stock: "2", id: 2, marca: "XIAOMI", imagen: "/multimedia/aurisblancos.webp" },
    { nombre: "AURICULARES IN-EAR  SONY WF-C500 NEGRO", color: "NEGRO", precio: "17900", stock: "1", id: 3, marca: "SONY", imagen: "/multimedia/aurissony.webp" },
    { nombre: "AURICULARES IN EAR INALAMBRICOS REDMI AIRDOTS 3 AZUL XIAOMI", color: "AZUL", precio: "5500", stock: "4", id: 4, marca: "XIAOMI", imagen: "/multimedia/aurisazul.webp" }
]

function buscarId(id) {
    let buscarId = productos.find((producto) => producto.id === id)
    return buscarId
}

function valorIngresado() {
    let resultado = parseInt(prompt("Por favor ingrese el numero del producto que desea comprar"))
    if (resultado !== 1 && resultado !== 2 && resultado !== 3 && resultado !== 4) {
        alert("por favor ingrese un valor valido")
        return
    }
    let productoElegido = buscarId(resultado)
    alert(`El producto que seleccionaste es ${productoElegido.nombre} ${productoElegido.color} y el precio es de: $${productoElegido.precio}`)
    let confirmacionCompra = confirm(`Confirma la compra del producto: ${productoElegido.nombre} ${productoElegido.color} `)
    if (confirmacionCompra) {
        calcularCuotas(productoElegido.precio)
    } else {
        alert("Hasta la proxima!")
    }
}


function calcularCuotas(precio) {
    let formaDePago = confirm("Desea abonar con tarjeta? Si desea pagar en Efectivo pulse cancelar.")
    if (formaDePago) {
        let cuotasElegidas = parseInt(prompt("Ingrese el numero de cuotas con las que desea comprar el producto"))
        if (isNaN(cuotasElegidas)) {
            alert("Numero de cuotas no valido")
        } else {
            const cuota = new Cuota(precio, interes, cuotasElegidas)
            let mensaje = "Precio de cada cuota mensual: $ " + cuota.cuotaMensual().toFixed(2) + "\n"
            alert(mensaje)
        }
    } else {
        alert(`El monto a pagar es de: $${precio}`)
    }

}

