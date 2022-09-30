let cart = []
// let modalCart = document.getElementById("cart") 

// const agregarAlCarrito = (indice) =>{
//     const indiceFindCart = cart.findIndex((element)=>{
//         return element.id === product[indice].id
//     });
//     if(indiceFindCart === -1){
//         const productAdd = products[indice]
//         productAdd.quantity = 1;
//         cart.push(productAdd);
//         dibujarCarrito()
//     }else{
//         cart[indiceFindCart].quantity +=1;
//         dibujarCarrito(); localStorage.getItem("productos añadidos")
//     }
// }


// let total = 0
// const dibujarCarrito = () =>{
//     modalCart.className = "cartt"
//     modalCart.innerHTML = "";
//     if(cart.length > 0){
//         cart.forEach((product, indice) =>{
//             total = total + product.price * product.quantity; localStorage.getItem("producto total")
//             const cartContainer = document.createElement("div");
//             cartContainer.className = "cart-product";
//             cartContainer.innerHTML = `
//             <img class= "cart-img" src= "${product.img}"/>
//             <div class= "product-details">
//             ${product.name}
//             </div>
//             <div class= "product-details"> Quantity: ${product.quantity}</div>
//             <div class= "product-details"> Price: ${product.price}</div>
//             <duv class= "product-details">Subtotal: ${product.price * product.quantity}</div> 
//             <button class= "btn btn-info" id="remove-product" onClick="removeProduct(${indice})"Delete products</button>`; localStorage.getItem("carrito")
//             modalCart.appendChild(cartContainer);
//         })
//         const totalContainer = document.createElement("div")
//         totalContainer.className= "total-cart"
//         totalContainer.innerHTML= `<div class= "total">Total $ ${total}</div>
//         <button class= "btn btn-info finalizar" id= "finalizar" onClick="finalizarCompra`; localStorage.getItem("fin compra")
//     }
// }
// const removeProduct = (indice)=> {
//     cart.splice(indice, 1);
//     dibujarCarrito();
// }