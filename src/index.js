import "./styles.css";
import { PageLoad } from "./homepage";
import { MenuPage } from "./menu";
import { reservationPage } from "./reservation";

const menuBttn = document.querySelector(".menu");
const menuBtn = document.querySelector(".menuBtn");
const heroBtn = document.querySelector(".heroBtn");
const eventBtn = document.querySelector(".eventBtn");
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
menuBttn.addEventListener("click", LoadMenu);
reservationsBtn.addEventListener("click", LoadReservations);
menuBtn.addEventListener("click", LoadMenu);
eventBtn.addEventListener("click", LoadReservations);
heroBtn.addEventListener("click", LoadReservations);
