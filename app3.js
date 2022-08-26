//Trabajo complementario

let ecuación = 3

for(let i = 0; i <= 3; i++){

let respuesta = prompt(`Resolvé la ecuación e ingresa el resultado para acceder: x-3 = 3-x`);

if(ecuación === respuesta){
    alert(`La solución de la ecuación es 3. ¡Felicitaciones! Tu respuesta es correcta`);
    break;
} else {
    alert(`Te quedan `+ (2-i)+` intentos`);
} if (i==2){
    alert(`Llegaste al máximo de respuestas incorrectas. Intentalo otra vez`);
    continue;
}
}






/*
let food = prompt("Que se te antoja?");

switch (food){
    case "hamburguesa":
        console.log(`Pedido: ${food}, valor $1200`)
    break;
    case "pizza":
        console.log(`Pedido: ${food}, valor $900`)
    break;
    case "lomo":
        console.log(`Pedido: ${food}, valor $800`)
    break;
    default:
        console.log("Te ahorras unos pesos si no pedis");
        break;

}
*/

/*
let option = prompt(`Elija una opción:
1: Literatura clásica
2: Literatura juvenil
3: Literatura inglesa
4: Literatura universal
`);

switch (option){
case "1":
    console.log("Literatura clásica");
    break;
    case "2":
        console.log("Literatura juvenil");
        break;
    case "3":
        console.log("Literatura inglesa");
        break;
    case "4":
        console.log("Literatura universal");
        break;
    default:
        console.log("No has ingresado una opción válida");
        break;
}
*/

/*
let x = 0

while (x <= 10){
console.log(`El valor de X es ${x}`)
x++
}
*/

/*
let entrada = prompt("Ingrese un texto o ESC para interrumpir")

let texto = " ";

while (entrada != "ESC" && entrada != "esc"){
    texto += entrada + " "
    entrada = prompt("Ingrese un texto o ESC para interrumpir")
}
alert(texto);
*/

/*
let y = 0

do {
    console.log(`El valor de y es ${y}`)
    y++
} while (y <= 10);
*/

/*
let x = 25

do {
    console.log(x);
    x++
} while (x <= 30);
*/

/*
for (let i = 0; i < 10; i++){
    alert(`El valor de I es ${i}`);
}
*/

//Tabla de multiplicar

/*
let numero = Number(prompt("Ingrese un número"));

for(let i = 1; i <= 10; i++){
    let resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}` );
}
*/

/*
for (let i = 1; i <= 10; i++){
    if (i === 6){
        break;
    }
    alert(`El valor de I es ${i}`)
}
*/

/*
for (let i = 1; i <= 10; i++){
    if(i === 6){
        continue;
    }
    alert(`El valor de I es ${i}`);
}
*/