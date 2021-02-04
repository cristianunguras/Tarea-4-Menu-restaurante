/**
 * Programación Funcional
 */

// USUARIOS
let usuario = {
    nombre: 'Pepe',
    edad: 41
}

// Pedido Actual
let pedido = []
let suma = 0; //variable para sumar precio platos del pedido

// MOSTRAR MENÚ
const mostrarMenu = () => {
        console.log(`COD - PLATO - PRECIO`)
        console.log(`--------------------`)
        CARTA.forEach(plato => {
            console.log(`${plato.cod} - ${plato.nombre} - ${plato.precio}€`)
        })
    }
    // Enseñar el menú al inicio
mostrarMenu()

// PEDIDO
const pedidoDelUsuario = elegir => {
    pedido.push(CARTA.find(articulo => elegir === articulo.cod)) //añadimos plato al arreglo pedido
}
let numeroPlatos = prompt("Introduzca numero de platos que va a pedir: ")
for (i = 1; i <= numeroPlatos; i++) {
    let articulo = prompt(`Código plato (se puede ver en consola!!!) ${i}`)
    pedidoDelUsuario(articulo) //recorremos los platos hasta encontrar el pedido y los añadimos llamado función(Arrow Function)
}
document.write(`El pedido de ${usuario.nombre} de ${usuario.edad} años es:<br> `)
pedido.forEach(plato => { //recorremos el arreglo pedido
    document.write(`${plato.cod} - ${plato.nombre} - ${plato.precio}€<br>`)
    suma = suma + plato.precio
})
document.write(`El precio total es  de ${suma} euros.`)