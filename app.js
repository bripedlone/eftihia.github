const products = [
    {
        "id": 1,
        "name": "Crimen y castigo",
        "price": 3799,
        "img": "./img/crimenycastigo-clasico.jpg",
    },
    {
        "id": 2,
        "name": "El retrato de Dorian Gray",
        "price": 2099,
        "img": "./img/doriangray-clasico.jpg"
    },
    {
        "id": 3,
        "name": "La metamorfosis",
        "price": 4000,
        "img": "./img/metamorfosis-clasico.jpg",
    },
    {
        "id": 4,
        "name": "1984",
        "price": 3099,
        "img": "./img/1984-ing.jpg"
    },
    {
        "id": 5,
        "name": "The goldfinch",
        "price": 6956,
        "img": "./img/goldfinch-ing.jpg"
    },
    {
        "id": 6,
        "name": "The secret history",
        "price": 2776,
        "img": "./img/secrethistory-ing.jpg",
    },
    {
        "id": 7,
        "name": "If we were villains",
        "price": 6956,
        "img": "./img/villains-ing.jpg",
    },
    {
        "id": 8,
        "name": "Noches blancas",
        "price": 2839,
        "img": "./img/nochesblacas-rusa.jpg",
    },
    {
        "id": 9,
        "name": "Lolita",
        "price": 3500,
        "img": "./img/lolita-rusa.jpg",
    },
    {
        "id": 10,
        "name": "Los hermanos Karamazov",
        "price": 4299,
        "img": "./img/karamazov-rusa.jpg",
    },
    {
        "id": 11,
        "name": "Sherlock Holmes",
        "price": 4442,
        "img": "./img/sherlockholmes-ing.jpg",
    },
    {
        "id": 12,
        "name": "Los crímenes de la calle Morgue",
        "price": 1752,
        "img": "./img/morgue-poli.jpg",
    },
    {
        "id": 13,
        "name": "El maestro y Margarita",
        "price": 2570,
        "img": "./img/margarita-rusa.jpg",
    },
    {
        "id": 14,
        "name": "Orgullo y prejuicio",
        "price": 4500,
        "img": "./img/orgulloyprejuicio-clasico.jpg",
    },
]  

const dibujarProducto = ()=> {
    let contenedor = document.getElementById("container")
    products.forEach((product, indice) => {
        let card = document.createElement("div")
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${shopContent.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <a href="#" class="btn btn-buy" onclick="agregarAlCarrito()">Buy</a>
        </div>`;
        contenedor.appendChild(card)
    });
}
dibujarProducto();

let cart = []
let modalCart = document.getElementById("cart") 

const agregarAlCarrito = (indice) =>{
    const indiceFindCart = cart.findIndex((element)=>{
        return element.id === product[indice].id
    });
    if(indiceFindCart === -1){
        const productAdd = products[indice]
        productAdd.quantity = 1;
        cart.push(productAdd);
        dibujarCarrito()
    }else{
        cart[indiceFindCart].quantity +=1;
        dibujarCarrito(); localStorage.getItem("productos añadidos")
    }
}


let total = 0
const dibujarCarrito = () =>{
    modalCart.className = "cartt"
    modalCart.innerHTML = "";
    if(cart.length > 0){
        cart.forEach((product, indice) =>{
            total = total + product.price * product.quantity; localStorage.getItem("producto total")
            const cartContainer = document.createElement("div");
            cartContainer.className = "cart-product";
            cartContainer.innerHTML = `
            <img class= "cart-img" src= "${product.img}"/>
            <div class= "product-details">
            ${product.name}
            </div>
            <div class= "product-details"> Quantity: ${product.quantity}</div>
            <div class= "product-details"> Price: ${product.price}</div>
            <duv class= "product-details">Subtotal: ${product.price * product.quantity}</div> 
            <button class= "btn btn-info" id="remove-product" onClick="removeProduct(${indice})"Delete products</button>`; localStorage.getItem("carrito")
            modalCart.appendChild(cartContainer);
        })
        const totalContainer = document.createElement("div")
        totalContainer.className= "total-cart"
        totalContainer.innerHTML= `<div class= "total">Total $ ${total}</div>
        <button class= "btn btn-info finalizar" id= "finalizar" onClick="finalizarCompra`; localStorage.getItem("fin compra")
    }
}
const removeProduct = (indice)=> {
    cart.splice(indice, 1);
    dibujarCarrito();
}