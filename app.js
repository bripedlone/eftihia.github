//1er Final

class productoLibro{
    constructor(nombre, precio, autor){
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
    }
}

const libros = [
    {nombre: "Crimen y castigo", precio: 3.799, autor: "Fyodor Dostoievski" },
    {nombre: "El retrato de Dorian Gray", precio: 2.099, autor: "Oscar Wilde"},
    {nombre: "La metamorfosis", precio: 4.000, autor: "Franz Kafka"},
    {nombre: "Orgullo y prejuicio", precio: 4.420, autor: "Jane Austen"},
]

//Funciones

let nombre = prompt("Ingrese su nombre");

function bienvenido() {
    alert(`¡Bienvenido/a a Eftihia ${nombre}! Iniciemos la compra`);
}

bienvenido();

if (nombre !== "") {
    //var
    let carrito = [];
    let producto;
    let pago;
}

let compra = prompt(`Elegí la opción que más te interese: \n 1) "Crimen y Castigo" \n 2) "El retrato de Dorian Gray" \n 3) "La metamorfosis" \n 4) "Orgullo y Prejuicio"`);

function crimenYCastigo() {
    alert(`Elegiste "Crimen y castigo". Su costo es de $3.799 ¿Procedemos con el pago?`);
}

function elRetratoDeDorianGray() {
    alert(`Elegiste "El retrato de Dorian Gray". Su costo es de $2.099 ¿Procedemos con el pago?`);
}

function laMetamorfosis() {
    alert(`Elegiste "La metamorfosis". Su costo es de $4.000 ¿Procedemos con el pago?`);
}

function orgulloYPrejucio() {
    alert(`Elegiste "Orgullo y prejuicio". Su costo es de $4.420 ¿Procedemos con el pago?`)
}

if (compra === "1") {
    crimenYCastigo ();
} else if (compra === "2") {
    elRetratoDeDorianGray ();
} else if (compra === "3") {
    laMetamorfosis ();
} else if (compra === "4") {
    orgulloYPrejucio ();
} else {
    alert("El término ingresado no existe");
}

let pago = prompt(`¿Con qué método de pago vas a abonar?: \n 1: Tarjeta \n 2: Efectivo (Abonando en efectivo tenes un 10% de descuento)`);

switch (pago) {
    case "1":
        let tarjeta = prompt(`Decidiste abonar con tarjeta. Ingresá el monto requerido`);
        if (tarjeta >= compra) {
            alert("¡Felicitaciones! Tu compra se realizó con éxito.");
            alert("Te esperamos para la próxima compra. ¡Gracias por confiar en Eftihia!");
            break;
        } else if (tarjeta < compra){
            alert("Fondos insuficientes, no se pudo realizar la compra.");
            break;
        }
        break;
    
    case "2": 
        let efectivo = prompt(`Decidiste abonar en efectivo. Ingresá el monto requerido y obtené tu descuento`);
        if (efectivo >= compra) {
            Number(alert(`Tu descuento es de $` + 3799*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            break;
        } else if (efectivo >= compra) {
            Number(alert(`Tu descuento es de $` + 2099*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            break;
        } else if (efectivo >= compra) {
            Number(alert(`Tu descuento es de $` + 4000*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            break;
        } else if (efectivo >= compra) {
            Number(alert(`Tu descuento es de $` + 4420*10/100));
            alert("¡Felicitaciones! Tu compra se realizó con éxito");
            break;
        } else if (efectivo < compra){
            alert("No contas con el saldo suficiente, no se ha podido realizar tu compra. ¡Lo sentimos!");
            break;
        }
        break;
    default:
        break;
}

function encuestaCalidad(){
    alert("¡Antes de que te vayas queremos hacerte una breve encuesta para saber que tan conforme estas con el servicio y en que podemos mejorar!");
    let options = prompt(`¿Cómo calificarías tu experiencia en Eftihia? \n 1: Mala \n 2: Regular \n 3: Buena \n 4: Muy buena`);
    switch (options){
        case "1":
            console.log("Mala");
            break;
        
        case "2":
            console.log("Regular");
            break;
        case "3":
            console.log("Buena");
            break;
        case "4": 
        console.log("Muy buena");
        break;
        default:
            console.log("El término ingresado no existe");
    }
}

function goodbye(){
    alert (`¡Muchas gracias por contestar esta pequeña encuesta ${nombre}! ¡Gracias por confiar e Eftihia! Te esperamos la próxima`);
}
encuestaCalidad()
goodbye()
