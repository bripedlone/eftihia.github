const contenedor = document.getElementById("container")

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
        card.classList.add("card", "col-sm-12", "col-lg-3", "add-cart");
        card.innerHTML += `<img src="${product.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <a href="#" class="btn btn-primary" onclick="add-cart()">Buy</a>
          </div>`;
        contenedor.appendChild(card)
    });
}
dibujarProducto();

// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
//Close cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};

//Cart working
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

//Functions
function ready(){
    //Remove products from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }
    //Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged);
    }
    //Add to cart;
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked);
    }
    //Buy button work
    document
    .getElementsByClassName('btn-buy')[0]
    .addEventListener('click', buyButtonClicked);
}
//Buy button
function buyButtonClicked(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}
//Remove cart item
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal ();
}
//Quantity changes
function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateTotal();
}
//Add to cart
function addCartClicked (event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("card-title")[0].innerText
    var price = shopProducts.getElementsByClassName("card-text")[0].innerText
    var img = shopProducts.getElementsByClassName("cart-img")[0].innerText
    addProductToCart(title); localStorage.getItem("Selected items")
    updateTotal();
}
function addProductToCart(title, price, img){
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsName = cartItems.getElementsByClassName('cart-product-title')
    for (var i = 0; i < cartItemsName.length; i++){
        if (cartItemsName[i].innerText == title);
        return;
    }
}
var cartBoxContent = `<img src: "${img}" class= "cart-img" alt="">
<div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quantity">
</div>
<!-- Remove cart -->
<i class='bx bxs-trash-alt cart-remove'></i>`
cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox
.getElementsByClassName('cart-remove')[0]
.addEventListener('click', removeCartItem)
cartShopBox
.getElementsByClassName('cart-quantity')[0]
.addEventListener('change', quantityChanged);

//Update total
function updateTotal (){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ""));
        var quantity = quantityElement.value
        total = total + price + quantity;
    }
        document.getElementsByClassName('total-price')[0].innerText = '$' + total; localStorage.getItem("tTotal compra")
}