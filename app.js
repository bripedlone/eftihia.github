const shop = document.getElementById("shopContent");
const modalContainer = document.getElementById("modal-container")
const contenedorCarrito =ndocument.getElementById("carrito-contenedor")
const botonVaciar = document.getElementById("vaciar-carrito")
const precioTotal = document.getElementById("precioTotal")

let carrito = []

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem(`carrito`)){
        carrito = JSON.parse(localStorage.getItem(`carrito`))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener("click", () =>{
    carrito.length = 0
    actualizarCarrito()
})

let shopContent = [
    {
        id: 1,
        nombre: "Crimen y castigo",
        precio: 3.799,
        img: "../eftihia/img/crimenycastigo-clasico.jpg",
    },
    {
        id: 2, 
        nombre: "El retrato de Dorian Gray",
        precio: 2099,
        img: "../eftihia/img/doriangray-clasico.jpg"
    },
    {
        id: 3,
        nombre: "La metamorfosis",
        precio: 4000,
        img: "../eftihia/img/metamorfosis-clasico.jpg",
    },
    {
        id: 4,
        nombre: "Orgullo y prejuicio",
        precio: 4420,
        img: "../eftihia/img/orgulloyprejuicio-clasico.jpg",
    },
    {
        id: 5,
        nombre: "Los hermanos Karamazov",
        precio: 4299,
        img: "../eftihia/img/karamazov-rusa.jpg",
    },
    {
        id: 6,
        nombre: "El maestro y la margarita",
        precio: 4300,
        img: "../eftihia/img/margarita-rusa.jpg",
    },
    {
        id: 7,
        nombre: "Lolita",
        precio: 3500,
        img: "../eftihia/img/lolita-rusa.jpg",
    },
    {
        id: 8,
        nombre: "Noches blancas",
        precio: 2839,
        img: "../eftihia/img/nochesblacas-rusa.jpg",
    },
    {
        id: 9,
        nombre: "The secret history",
        precio: 2776,
        img:"../eftihia/img/secrethistory-ing.jpg"
    },
    {
        id: 10,
        nombre: "1984",
        precio: 3999,
        img: "../eftihia/img/1984-ing.jpg",
    },
    {
        id: 11,
        nombre: "The goldfinch",
        precio: 6956,
        img: "../eftihia/img/goldfinch-ing.jpg",
    },
    {
        id: 12,
        nombre: "If we were villains",
        precio: 2418,
        img:"../eftihia/img/villains-ing.jpg",
    },
    {
        id: 13,
        nombre: "Sherlock Holmes",
        precio: 4449,
        img: "../eftihia/img/sherlockholmes-ing.jpg" ,
    },
    {
        id: 14,
        nombre: "El nombre de la rosa",
        precio: 2849,
        img: "../eftihia/img/elnombredelarosa.jpg" ,
    },
    {
        id: 15,
        nombre: "Los crimenes de la calle morgue",
        precio: 1752,
        img: "../eftihia/img/morgue-poli.jpg",
    },
    {
        id: 16, 
        nombre: "El espía que surgió del frío",
        precio: 2295,
        img: "../eftihia/img/thespy-poli.jpg",
    },
]

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3 class="tituloClasic">${product.nombre}</h3>
    <p class="price">$${product.precio}</p>
    `;

    shopContent.append(content);

    const boton = document.getElementById(`Agregar ${producto.id}`)

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    })
    })


const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)

    if (existe){
        const prod = carrito.map(prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {

    const item = stockProductos.find ((prod) => prod.Id === prodId)
    carrito.push(item)
    console.log(carrito)
}
actualizarCarrito()

const elimicarDelCarrito = (prodId) => {
    const item = carrito.find((prod) =>prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () =>{

    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) =>{
        const div = document.createElement("div")
        div.className= "producto-carrito"
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <p>Cantidad: >span id="cantidad>${prod.cantidad}</span></p>
        >button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem(`carrito`, JSON.stringify(carrito))
        contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
    
    })
}
