import "./styles.css";
import { PageLoad } from "./homepage";
import { MenuPage } from "./menu";
import { reservationPage } from "./reservation";

const menuBtn = document.querySelector(".menu");
const contentDiv = document.querySelector(".content");
const homeBtn = document.querySelector(".home");
const reservationsBtn = document.querySelector(".reservations");

LoadHomePage();

function LoadHomePage() {
    contentDiv.textContent = "";
    PageLoad(contentDiv);
}
function LoadMenu(){
    contentDiv.textContent = "";
    MenuPage(contentDiv);
    };

function LoadReservations() {
    contentDiv.textContent = "";
    reservationPage(contentDiv);

}
homeBtn.addEventListener("click", LoadHomePage);
menuBtn.addEventListener("click", LoadMenu);
reservationsBtn.addEventListener("click", LoadReservations);

