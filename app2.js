const shop = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

const productos = [
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

let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3 class="tituloClasic">${product.nombre}</h3>
    <p class="price">$${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className ="btn btn-primary";

    content.append(comprar);

    comprar.addEventListener("click", ()=>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        })
        console.log(carrito)
    })
})
verCarrito.addEventListener("click", ()=>{
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h2");
    modalbutton.innerText ="x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);

    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML =`
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        `
        modalContainer.append(carritoContent)
    })
    const total = carrito.reduce((acc, el)=> acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML =`total a pagar: $${total}`;
    modalContainer.append(totalBuying)
});