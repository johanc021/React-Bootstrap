/**
 * Completar el desafio generico obteniendo la informacion solicitada
 * 
 * A) Los nombres de los productos en un string separados por comas. Armar un string.
 * B) El precio total de todos los productos
 * C) El precio promedio de todos los productos
 * D) El producto con menor precio
 * E) El producto con mayor precio
 * F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola
 */

// map, sort, filter, join, find, some

let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 },
]

const obteniendoDatos = () => {

    //string de nombres
    let nombresProductos = productos.map(producto => producto.nombre);
    let stringProductos = nombresProductos.join(", ");

    //Suma precios

    let sumaPrecios = productos.reduce((total, producto) => total + producto.precio, 0);

    //promedio

    let acumulador = sumaPrecios
    let promedioPrecios = acumulador / productos.length;

    //producto con menor precio

    let productoConMenorPrecio = productos.reduce((productoMasBarato, producto) =>
        productoMasBarato.precio < producto.precio ? productoMasBarato : producto
    );

    //producto con mayor precio

    let productoConMayorPrecio = productos.reduce((productoMasBarato, producto) =>
        productoMasBarato.precio > producto.precio ? productoMasBarato : producto
    );

    //objeto de datos

    let informacionDeProductos = {
        nombresDeProductos: nombresProductos,
        sumaDePrecios: sumaPrecios,
        promedioDePrecios: promedioPrecios,
        productoConMenorPrecio: productoConMenorPrecio,
        productoConMayorPrecio: productoConMayorPrecio,
    };

    console.log(informacionDeProductos);
} 

obteniendoDatos()