console.log("Hola mundo")

let opcion
let entrada = prompt("Ingrese su nombre")
let cantCuotas
let resultado

do {
    opcion = Number(prompt("Hola " +entrada + ", seleccione el producto del cual quiera saber su precio y la cantidad de cuotas en la que se encuentra disponible: \n 0 - Salir \n 1 - Televisión \n 2 - Television 4k \n 3 - Licuadora"))

    if (opcion === 1) {
        mostrarPrecioElectrodomestico("Televisión", 45000)
    } else if (opcion === 2) {  
        mostrarPrecioElectrodomestico("Televisión 4k", 75000)
    } else if (opcion === 3) {
        mostrarPrecioElectrodomestico("Licuadora", 15000)
    } else {
        alert("Actualmente ese objeto no se encuentra en la lista de productos")
    }
    break
} while (opcion != 0);

function mostrarPrecioElectrodomestico(producto, precio) { 
    alert("El/la " + producto + " tiene un valor de " + precio + " Y está disponible en 12 cuotas.")
    let cantCuotas = Number(prompt("¿En cuantas cuotas quiere retirar el producto? Tenga en cuenta que la sucursal puede cancelar la compra en caso de exederse las cuotas máximas"))
    if (cantCuotas > 12 || cantCuotas < 1) {
         alert('Usted está seleccionando un valor de cuotas no valido')
     {return}
    } else {}
    let resultado = alert("Su total a pagar por mes será de "+ precio / cantCuotas ).fixedTo(2)
}