let nombre = prompt("Ingrese su nombre");
bienvenido();

function bienvenido() {
    alert(`¡Bienvenido/a a Eftihia ${nombre}! Iniciemos la compra`);
}

let compra = prompt(`Elegí la opción que más te interese: \n 1) "The secret history" \n 2) "Crimen y castigo" \n 3) "Bungou stray dogs" \n 4) "Tan poca vida"`);


function theSecretHistory() {
    alert(`Elegiste "The secret history". Su costo es de $3349 ¿Procedemos con el pago?`);
}

function crimenYCastigo() {
    alert(`Elegiste "Crimen y castigo". Su costo es de $3600 ¿Procedemos con el pago?`);
}

function bungouStrayDogs() {
    alert(`Elegiste "Bungou stray dogs". Su costo es de $2660 ¿Procedemos con el pago?`);
}

function tanPocaVida() {
    alert(`Elegiste "Tan poca vida". Su costo es de $6189 ¿Procedemos con el pago?`)
}

if (compra === "1") {
    theSecretHistory ();
} else if (compra === "2") {
    crimenYCastigo ();
} else if (compra === "3") {
    bungouStrayDogs ();
} else if (compra === "4") {
    tanPocaVida ();
} else {
    alert("El término ingresado no existe");
}

let pago = prompt(`¿Con qué método de pago vas a abonar?: \n 1: Tarjeta \n 2: Efectivo (Abonando en efectivo tenes un 10% de descuento)`);

switch (pago) {
    case (tarjeta):
        alert("Decidiste abonar con tarjeta. INgresá el monto requerido");
        break;
    
    case (efectivo): 
        alert("Decidiste abonar en efectivo. Ingresá el monto requerido y obtené tu descuento");
        break;
    default:
        break;
}


switch (pago) {
    case tarjeta:
        if (tarjeta >= compra) {
            alert("¡Felicitaciones! Tu compra se realizó con éxito.");
            alert("Te esperamos para la próxima compra. ¡Gracias por confiar en Eftihia!");
            break;
        } else {
            alert("Fondos insuficientes, no se pudo realizar la compra.");
            break;
        }
        break;
    case efectivo: 
        if (efectivo >= "1") {
            Number(alert(`Tu descuento es de $` + 3349*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            alert("Te esperamos para tu próxima compra. ¡Gracias por confiar en Eftihia!");
            break;
        } else if (efectivo >= "2") {
            Number(alert(`Tu descuento es de $` + 3600*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            alert("Te esperamos para tu próxima compra. ¡Gracias por confiar en Eftihia!");
            break;
        } else if (efectivo >= "3") {
            Number(alert(`Tu descuento es de $` + 3600*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            alert("Te esperamos para tu próxima compra. ¡Gracias por confiar en Eftihia!");
            break;
        } else if (efectivo >= "4") {
            Number(alert(`Tu descuento es de $` + 6189*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            alert("Te esperamos para tu próxima compra. ¡Gracias por confiar en Eftihia!");
            break;
        } else {
            alert("No contas con el saldo suficiente, no se ha podido realizar tu compra. ¡Lo sentimos!");
            break;
        }
        default:
        console.log("Probando metodos de pago");
        break;
     }
    
