// Simulador interactivo

let nombre = prompt("Ingrese su nombre")
bienvenida ();

function bienvenida (){
    alert(`¡Bienvenida a Eftihia ${nombre}! Iniciemos la compra`);
}

let compra = prompt(`Elegí la opción que más te interese: 1) The secret history  2) Crimen y castigo 3) Bungou stray dogs 4) Tan poca vida`)

if (compra === "1") {
    thesecrethistory();
} else if (compra === "2"){
    crimenycastigo();
} else if (compra === "3"){
    bungoustraydogs();
} else if (compra === "4"){
    tanpocavida();
} 

function thesecrethistory(){
    alert(`Elegiste "The secret history". Tiene un costo de $3349 ¿Procedemos con el pago?`);
}
function crimenycastigo(){
    alert(`Elegiste "Crimen y castigo". Tiene un costo de $3600 ¿Procedemos con el pago?`);
}
function bungoustraydogs(){
    alert(`Elegiste "Bungou stray dogs". Su costo es de $2660 ¿Procedemos con el pago?`);
}
function tanpocavida(){
    alert(`Elegiste "Tan poca vida". Su costo es de $6189 ¿Procedemos con el pago?`);
}

let pago = prompt(`¿Con qué método de pago vas a pagar?: \n1) Tarjeta \n2) Efectivo`);

//tarjeta

if (compra === "1"){
    tarjeta();
} else if (compra === "2"){
    tarjeta();
} else if (compra === "3"){
    tarjeta();
} else if (compra === "4"){
    tarjeta();
}

function tarjeta(){
    if (compra === "1") {
        alert(`Decidiste abonar con tarjeta. Ingresa el monto requerido`);
    } else if (compra === "2"){
        alert(`Decidiste abonar con tarjeta. Ingresa el monto requerido`);
    } else if (compra === "3"){
        alert(`Decidiste abonar con tarjeta. Ingresa el monto requerido`);
    } else if (compra === "4"){
        alert(`Decidiste abonar con tarjeta. Ingresa el monto requerido`);
    }
}
let montoTarjeta = prompt(`Monto requerido`);
while (montoTarjeta >= compra){
    alert(`¡Felicitaciones! Tu compra se realizó con éxito`);
    alert(`Gracias por confiar en Eftihia, te esperamos en tu próxima compra`);
    break;
}
while (montoTarjeta < compra){
    alert(`Fondos insuficientes, no se ha podido realizar tu compra. ¡Intenta de nuevo!`);
    break;
}

//efectivo
// let pagoEfectivo;

// if (compra === "1") {
//     efectivo();
// } else if (compra === "2"){
//     efectivo();
// } else if (compra === "3"){
//     efectivo();
// } else if (compra === "4"){
//     efectivo();
// }

// function efectivo(){
//     if (compra === "1"){
//         alert(`Decidiste abonar en efectivo. Ingresa el monto requerido`);
//     } else if (compra === "2"){
//         alert(`Decidiste abonar en efectivo. Ingresa el monto requerido`);
//     } else if (compra === "3"){
//         alert(`Decidiste abonar en efectivo. Ingresa el monto requerido`);
//     } else if ("4"){
//         alert(`Decidiste abonar en efectivo. Ingresa el monto requerido`);
//     }
// }

// let montoEfectivo = prompt(`Monto requerido`);

// while (montoEfectivo >= compra){
//     alert(`¡Felicitaciones! Tu compra se realizó con éxito`);
//     if (montoEfectivo < compra){
//         alert(`Tu dinero es insuficiente, no se ha podido realizar la compra.`);
//         alert(`Gracias por confiar en Eftihia. ¡Te esperamos en tu próxima compra!`)
//         break;
//     }
// }


