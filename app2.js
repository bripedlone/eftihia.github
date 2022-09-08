//Clase 6 Arrays

// const arrayA = [1, true, "Brisa"];
// console.log(arrayA);

// const miArray = ["marca", 3, "palabra"];

// console.log(miArray.length);

//Agregar valores

// miArray.push("Otro elemento");

//Agregar elemento al inicio
// miArray.unshift("Elemento inicial");

//Eliinar elemento

//JOIN & CONCAT


// const alumnos = ["Brisa", "Stefania"];
// const tutores = ["Dario", "Rodrigo"];


// const presentes = alumnos.concat(tutores);

//Include



// const nombre = "La Odisea de Homero";
// const precio = 3600;
// const disponible = true;

// const producto = {
//     nombre: "La odisea de Homero",
//     precio: 3600,
//     disponible: true
// }

// console.log(producto);

// //Object constructor
// function Producto (nombre, precio){
//     this.nombre = nombre
//     this.precio = precio
//     this.disponible = true
// }

// const producto2 = new Producto ("Circe", 4500);

// console.log(producto2)

//Métodos personalizados

// function Cliente(nombre, edad, domicilio) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.domicilio = domicilio;

//     this.saludar = function () {
//         console.log("Saludos " + this.nombre);
//     };
// }

// const cliente1 = new Cliente("Brisa", 19, "Av. Carlos Tejedor 224");
// const cliente2 = new Cliente ("Stefania", 19, "Gascón 2152");

// cliente1.saludar();
// cliente2.saludar();

// Class Declaration

// class Cliente{
//     constructor(nombre, acceso){
//         this.nombre = nombre;
//         this.acceso = acceso;
//     }
// }

// const eftihia = new Cliente("Brisa", "Accepted");

// console.log(eftihia);




/*
if (condition) {
    //bloque verdadero
} else {
    //bloque falso
}
*/

//Como utilizar arrays

// const listaLibros = [];
// let cantidad = 5;


// do {
//     let entrada = prompt("Ingrese el libro");
//     listaLibros.push(entrada.toLowerCase())
//     console.log(listaLibros.length)
// } while (listaLibros.length != cantidad);

// const nuevaListaLibros = listaLibros.concat("La odisea", "La iliada");

// alert(nuevaListaLibros.join("\n"));

//Como eliminar cualquier elemento de un array

// const libros = ["La odisea", "La iliada", "Crimen y castigo", "Tan poca vida", "Sherlock Holmes"];

// const eliminar = (libro) => {
//     let i = libros.indexOf(libro);

//     if (i != -1) {
//         libros.splice(i, 1);
//     }
// }

// eliminar("Sherlock Holmes");

// console.log(libros);

//Array de objetos

/*
const objeto1 = { id: 1, producto: "Arroz"};

const array = [objeto1, {id: 2, producto: "Fideo"}];
array.push({id: 3, producto: "Atun"});

console.log(array)
*/

//Clase Higher order functions

// function mensaje(nombre){
//     console.log(`Saludos ${nombre}`);
// }

// mensaje("Brisa");

// function callback(){
//     console.log(`Soy un callback`);
// }

// function mensaje(callback){
//     callback();
// }

// mensaje(callback);

// function primero(segundo){
//     setTimeout(function(){
//         console.log("Primero")
//         segundo()
//     },5000)
// }

// function segundo(){
//     console.log("Segundo")
// }

// primero(segundo);

//FOR EACH


const pendientes = ["desafios", "preentregas", "asitencias", "booklets"];

// console.log(pendientes);

pendientes.forEach((pendiente,indice)=>{
    console.log(`${indice}: ${pendiente}`);
})