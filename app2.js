// let nombre = prompt(`Ingrese su nombre`);
// bienvenido ();

// function bienvenido (){
//     alert(`¡Bienvenido/a a Eftihia ${nombre}! Iniciemos la compra.`);
// }

// let compra = prompt(`Elegí la opción que más te interese: \n 1)"The secret history" \n 2)"Crimen y castigo" \n 3) "Bungou stray dogs" \n 4)"Tan poca vida"`);

// if (compra === "1") {
//     theSecretHistory ();
// } else if (compra === "2") {
//     crimenYCastigo ();
// } else if (compra === "3") {
//     bungouStrayDogs ();
// } else if (compra === "4") {
//     tanPocaVida ();
// } else {
//     alert("El término ingresado no existe");
// }

// function theSecretHistory (){
//     alert(`Elegiste "The secret history". Su costo es de $3349 ¿Procedemos con el pago?`);
// }

// function crimenYCastigo () {
//     alert(`Elegiste "Crimen y castigo". Su costo es de $3600 ¿Procedemos con el pago?`);
// }

// function bungouStrayDogs () {
//     alert(`Elegiste "Bungou stray dogs". Su costo es de $2660 ¿Procedemos con el pago?`);
// }

// function tanPocaVida () {
//     alert(`Elegiste "Tan poca vida". Su costo es de $6189 ¿Procedemos con el pago?`);
// }

// let pago = prompt(`¿Con que método de pago vas a abonar?: \n 1: Trajeta \n 2: Efectivo (Abonando con este medio tenes un 10% de descuento)`);

// const tarjeta = prompt (`Elegiste abonar con tarjeta. Ingresá el monto requerido`);
// const efectivo = prompt(`Elegiste abonar con efectivo. Ingresá el monto requerido y obtené tu descuento`);

// while (tarjeta >= compra) {
//     alert("¡Felicitaciones! Tu compra se realizó con éxito");
//     alert("Gracias por confiar en Eftihia. ¡Te esperamos para tu próxima compra")
//     break;
// }
// while (tarjeta < compra) {
//     alert(`Fondos insuficientes. ¡Lo sentimos! No podemos proceder con tu compra. Intenta de nuevo`);
//     break;
// }

// if (efectivo >= "1") {
//     Number(alert("Tu descuento es de $" + 3349*10/100));
// } else if (efectivo >= "2") {
//     Number(alert("Tu descuento es de $" + 3600*10/100));
// } else if (efectivo >= "3") {
//     Number(alert("Tu descuento es de $" + 2660*10/100));
// } else if (efectivo >= "4") {
//     Number(alert("Tu descuento es de $" + 6189*10/100));
// } else {
//     alert(`Tu saldo es insuficiente. ¡Lo sentimos! No se pudo realizar tu compra, intenta de nuevo.`);
// }

/*
if (condition) {
    //bloque verdadero
} else {
    //bloque falso
}
*/

/*
const puntaje = "1000";
//console.log(typeof puntaje);

if (puntaje == 1000) {
    console.log ("Es igual al valor indicado");
    
} else {
    console.log("No es igual al valor indicado");
}
*/

//operadores lógicos
/*
=== Estrictamente igual
!== Mo es estrictamente igual
> Mayor que
>= Mayor o igual
<= Menor o igual que
< Menor que
&& And
! Not
*/
/*
const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;

if (dinero > totalAPagar) {
    console.log("Puede proceder el pago")
    // condiciones anidadas
} else if(tarjeta){
    console.log("Puede proceder el pago posee tarjeta");
} else {
    console.log("Fondos insuficientes")
}
*/

//SWITCH
/*
const metodoPago = "Efectivo";

switch (metodoPago) {
    case "Efectivo":
        console.log("Abonaste en efectivo");
    break;
    case "Cheque":
        console.log("Abonaste con cheque");
    break;
    case "Tarjeta":
        console.log("Pagaste con tarjeta");
    break;
    default:
        console.log("Metodo de pago no aceptado");
        break;
}
*/
/*
const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log("Puede comprar");
} else if (usuario){
    console.log("No puede comprar");
} else if (puedePagar){
    console.log("No puede pagar")
} else {
    console.log("No puede ingresar");
}
*/

//OR
/*
const efectivo = 300;
const credito = 200; 
const disponible = efectivo + credito;
const totalAPagar = 600;
 
if (efectivo > totalAPagar || credito > totalAPagar || disponible > totalAPagar) {
    console.log("Puede comprar");
} else{
    console.log("Fondos insuficientes");
}
*/

/*
let nombreAlumno = prompt("Ingrese nombre del alumno");

let apellidoAlumno = prompt("Ingrese apellido del alumno");

console.log(nombreAlumno + " " + apellidoAlumno);

if (nombreAlumno !== "" && apellidoAlumno !== ""){
    alert("Nombre: " + nombreAlumno + " Apellido " + apellidoAlumno );
} else{
    alert("Completar datos");
}
*/

//ACT 1
/*
let entrada = prompt("Ingrese su nombre")
const nombre = "BART";

if (entrada == nombre) {
    alert("Fui yo");
} else {
    alert("Yo no fui");
}
*/

//ACT 3
/*
let entrada1 = prompt("Ingrese un número"); 

if (entrada1 == 1){
    alert("Elegiste al Dios mayor Poseidón");

} else if (entrada1 == 2){
    alert("Elegiste al Dios menor Apolo");

} else if (entrada1 == 3){
    alert("Elegiste al Dios mayor Hades");

} else if (entrada1 == 4){
    alert("Elegiste al Dios menor Hermes")
} else {
    alert("No ha ingresado el dato en el campo solicitado");
}
*/

//ACT 4
/*
let entrada = parseFloat(prompt("Ingresar monto"));
if ((entrada >= 0 ) && (entrada <= 1000)) {
    alert("Presupuesto bajo");
    
} else if ((entrada >= 1001) && (entrada <= 3000)){
    alert("Presupuesto medio");

} else if ((entrada >= 3000)){
    alert("Presupuesto alto");

}
*/

//ACT 5
/*
tuve que ver la corrección, mejorar y practicar esto!
let entrada = prompt("Ingrese producto 1");
let entrada2 = prompt("Ingrese producto 2");
let entrada3 = prompt("Ingrese producto 3");
let entrada4 = prompt("Ingrese producto 4"); 

if ((entrada1 !== "") && (entrada2 !== "") && (entrada3 !== "") && (entrada4 !== "")) {
    let alacena = "1) " + entrada + " " +
    "2) "  + entrada2  + " " +
    "3) " + entrada3 + " " +
    "4) " + entrada4;
    console.log(alacena);
} else {
    console.log("ERROR: es necesario cargar todos los productos");
}
*/





