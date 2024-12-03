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

const menuList = document.createElement("div");
const cart = document.createElement("div");

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
        const image = document.createElement('img');
        const addToCart = document.createElement("div");
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

    }
    div.appendChild(menuList);
}
displayMenuItems(menu);

}

export { MenuPage };