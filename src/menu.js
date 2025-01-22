import cartImg from "./images/icon-add-to-cart.svg";
import waffleImg from "./images/image-waffle-desktop.jpg";
import brulleImg from "./images/image-creme-brulee-desktop.jpg";
import MacaronImg from "./images/image-macaron-desktop.jpg";
import TiramisuImg from "./images/image-tiramisu-desktop.jpg";
import baklavaImg from "./images/image-baklava-desktop.jpg";
import pieImg from "./images/image-meringue-desktop.jpg";
import cakeImg from "./images/image-cake-desktop.jpg";
import brownieImg from "./images/image-brownie-desktop.jpg";
import pannaImg from "./images/image-panna-cotta-desktop.jpg";
import removeItem from "./images/icon-remove-item.svg";
import orderConfirmed from "./images/icon-order-confirmed.svg";

function MenuPage (div) {
let menu = [];
let cartList = [];

const menuPage = document.createElement("div");
menuPage.classList.add("menupage");
const menuList = document.createElement("div");
menuList.classList.add("menuList");
const cart = document.createElement("div");
cart.classList.add("cart");
const orderConfirmedModal = document.createElement("div");
orderConfirmedModal.classList.add("order-confirm-modal");
const ModalContainer = document.createElement("div");
ModalContainer.classList.add("modal-container");
const confirmOrderBtn = document.createElement("button");


function menuItems (type, name, price, url, count) {
    return {type, name, price, url, count}
}

const itemOne = menuItems("Waffle", "Waffle with Berry", 6.50, waffleImg, 0);
menu.push(itemOne);
const itemTwo = menuItems("Creme Brulee", "Vanilla Bean Creme Brulee", 7.00 , brulleImg, 0);
menu.push(itemTwo);
const itemThree = menuItems("Macaron", "Macaron Mix of Five", 6.00, MacaronImg, 0);
menu.push(itemThree);
const itemFour = menuItems("Tiramisu", "Classic Tiramisu", 4.5, TiramisuImg, 0);
menu.push(itemFour);
const itemFive = menuItems("Baklava", "Pistachio Baklava", 4.00, baklavaImg, 0);
menu.push(itemFive);
const itemSix = menuItems("Pie", "Lemon Meringue Pie", 5.00, pieImg, 0);
menu.push(itemSix);
const itemSeven = menuItems("Cake", "Red Velvet Cake", 4.50, cakeImg, 0);
menu.push(itemSeven);
const itemEight = menuItems("Brownie", "Salted Caramel Brownie", 5.50, brownieImg, 0);
menu.push(itemEight);
const itemNine = menuItems("Panna Cotta", "Vanilla Panna Cotta", 7.00, pannaImg, 0);
menu.push(itemNine);



function displayMenuItems(menu) {
    
    for (let item of menu) {
        const itemBox = document.createElement("div");
        itemBox.classList.add("itemBox");
        const image = document.createElement('img');
        image.classList.add("item-image");
        const addToCart = document.createElement("div");
        addToCart.classList.add("add-to-cart");
        
        const type = document.createElement("h3");

        const name = document.createElement("h2");
        const price = document.createElement("h2");

        image.src = item.url;
        addToCart.innerHTML = `<button id="${item.name}"> <img id="${item.name}" src="${cartImg}"> <p id="${item.name}">Add to Cart</p></button>`;
        type.textContent = item.type;
        name.textContent = item.name;
        price.textContent = `$${item.price}`;

        itemBox.appendChild(image);
        itemBox.appendChild(addToCart);
        itemBox.appendChild(type);
        itemBox.appendChild(name);
        itemBox.appendChild(price);

        menuList.appendChild(itemBox);

    };

    menuPage.appendChild(menuList);

    
    
    
    menuPage.appendChild(cart);
    div.appendChild(menuPage);
    

}

displayMenuItems(menu);


function displayCartItems() {
    cart.textContent = "";

    const cartHeader = document.createElement("h1");
    const orderTotal = document.createElement("div");
    let totalCost = 0.00;

    const cartItems = document.createElement("div");
    

    for (let item of cartList) {
        const itemCost = item.price * item.count;
    
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cartItem");

        itemDiv.innerHTML = `<h3>${item.name}</h3>
        <div class="price-details">
        <div class="item-details">
        <p class="item-count">${item.count}x</p> <p class="item-price">@$${item.price}</p> <p class="item-cost">$${itemCost}</p>
        </div>
        <img id="${item.name}" src="${removeItem}" alt="remove item"/>
        </div>`;

        totalCost = totalCost + itemCost;

        cartItems.appendChild(itemDiv);
    }

    
    cartHeader.textContent = "Your Cart";
    cartHeader.classList.add("cart-header");
    cart.appendChild(cartHeader);
    cartItems.classList.add("cart-item-container");
    cart.appendChild(cartItems);
    orderTotal.innerHTML = `Order Total            <span id="total">$${totalCost}</span>`;
    orderTotal.classList.add("order-total");
    cart.appendChild(orderTotal);
    confirmOrderBtn.textContent = "Confirm Order";
    confirmOrderBtn.classList.add("confirm-order-btn");
    cart.appendChild(confirmOrderBtn);

};


function addItemToCart(e) {
    for (let item of menu) {

        if (e.target.id == item.name) {
            
            if (item.count >= 1) {
                item.count++;
            }
            else {
                item.count++;
                cartList.push(item); 
            }
                      
        }
    }
    
    console.log(cartList);
    displayCartItems();
}

function removeFromCart(e) {

    for (let item of cartList) {
        
        if (e.target.id == item.name) {
            item.count = 0;
            let index = cartList.indexOf(item);

            cartList.splice(index, 1);
        }
        }
        displayCartItems();

}
function displayOrderConfirmedModal() {
    orderConfirmedModal.textContent = "";

    const modalHeader = document.createElement("div");
    const logo = document.createElement("img");
    logo.src = orderConfirmed;
    logo.classList.add("order-confirmed-logo");
    const header = document.createElement("h1");
    header.textContent = "Order Confirmed";
    const text = document.createElement("p");
    text.textContent = "we hope you enjoy your food!";

    modalHeader.appendChild(logo);
    modalHeader.appendChild(header);
    modalHeader.appendChild(text);

    const itemList = document.createElement("div");
    const orderTotal = document.createElement("div");
    const startNewOrderBtn = document.createElement("button");
    let totalCost = 0.00;

    
    for (let item of cartList) {
        const itemCost = item.price * item.count;    
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cartItem");

        itemDiv.innerHTML = `<h3>${item.name}</h3>
        <div class="price-details">
        <div class="item-details">
        <p class="item-count">${item.count}x</p> <p class="item-price">@$${item.price}</p>
        </div>
        <p class="item-cost">$${itemCost}</p>
        </div>`;

        totalCost = totalCost + itemCost;

        itemList.appendChild(itemDiv);
    }

    itemList.classList.add("item-list");
    orderConfirmedModal.appendChild(modalHeader);
    orderConfirmedModal.appendChild(itemList);
    orderTotal.innerHTML = `Order Total            <span id="total">$${totalCost}</span>`;
    orderTotal.classList.add("order-total");
    orderTotal.classList.add("new");
    orderConfirmedModal.appendChild(orderTotal);
    startNewOrderBtn.textContent = "Start New Order";
    startNewOrderBtn.classList.add("start-new-order-btn");
    orderConfirmedModal.appendChild(startNewOrderBtn);


    ModalContainer.appendChild(orderConfirmedModal);
    menuPage.appendChild(ModalContainer);
}

displayCartItems();

confirmOrderBtn.addEventListener("click", displayOrderConfirmedModal);
menuList.addEventListener("click", addItemToCart);
cart.addEventListener("click", removeFromCart);
}

export { MenuPage };