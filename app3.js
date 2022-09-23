



let carrito = [];


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
})