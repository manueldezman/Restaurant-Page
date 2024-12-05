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

function MenuPage (div) {
let menu = [];
let cartList = [];

const menuPage = document.createElement("div");
menuPage.classList.add("menupage");
const menuList = document.createElement("div");
menuList.classList.add("menuList");
const cart = document.createElement("div");
cart.classList.add("cart");

function menuItems (type, name, price, url) {
    return {type, name, price, url}
}

const itemOne = menuItems("Waffle", "Waffle with Berry", "$6.50", waffleImg);
menu.push(itemOne);
const itemTwo = menuItems("Creme Brulee", "Vanilla Bean Creme Brulee", "$7.00", brulleImg);
menu.push(itemTwo);
const itemThree = menuItems("Macaron", "Macaron Mix of Five", "$6.00", MacaronImg);
menu.push(itemThree);
const itemFour = menuItems("Tiramisu", "Classic Tiramisu", "$4.5", TiramisuImg);
menu.push(itemFour);
const itemFive = menuItems("Baklava", "Pistachio Baklava", "$4.00", baklavaImg);
menu.push(itemFive);
const itemSix = menuItems("Pie", "Lemon Meringue Pie", "$5.00", pieImg);
menu.push(itemSix);
const itemSeven = menuItems("Cake", "Red Velvet Cake", "$4.50", cakeImg);
menu.push(itemSeven);
const itemEight = menuItems("Brownie", "Salted Caramel Brownie", "$5.50", brownieImg);
menu.push(itemEight);
const itemNine = menuItems("Panna Cotta", "Vanilla Panna Cotta", "$7.00", pannaImg);
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
        addToCart.innerHTML = `<button> <img src="${cartImg}"> <p>Add to Cart</p></button>`;
        type.textContent = item.type;
        name.textContent = item.name;
        price.textContent = item.price;

        itemBox.appendChild(image);
        itemBox.appendChild(addToCart);
        itemBox.appendChild(type);
        itemBox.appendChild(name);
        itemBox.appendChild(price);

        menuList.appendChild(itemBox);

    };

    menuPage.appendChild(menuList);

    function displayCartItems(cart) {
        cart.textContent = "";

        const cartHeader = document.createElement("h1");
        const confirmOrderBtn = document.createElement("button");
        const orderTotal = document.createElement("div");
        let totalCost = 0;


        for (let item of cartList) {
            
            const cartItems = document.createElement("div");
            const itemDiv = document.createElement("div");
            const itemCost = item.price * item.count; 
            itemDiv.innerHTML = `<h3>${item.name}</h3>
            <div>
            <div>
            <p class"item-count">${item.count}</p> <p class="item-price">${item.price}</p> <p class="item-cost">${itemCost}</p>
            </div>
            <img src="./images/icon-remove-item.svg" alt="remove item"/>
            </div>`;

            totalCost = totalCost + itemCost;

            cartItems.appendChild(itemDiv);

        }

        itemDiv.classList.add("cartItem");
        cartHeader.textContent = "Your Cart";
        cartHeader.classList.add("cart-header");
        cart.appendChild(cartHeader);
        cart.appendChild(cartItems);
        orderTotal.textContent = `Order Total            ${totalCost}`
        cart.appendChild(orderTotal);
        confirmOrderBtn.textContent = "Confirm Order";
        confirmOrderBtn.classList.add("confirm-order-btn");
        cart.appendChild(confirmOrderBtn);

    };
    
    menuPage.appendChild(cart);
    div.appendChild(menuPage);


}
displayMenuItems(menu);

}

export { MenuPage };