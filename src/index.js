import "./styles.css";
import { PageLoad } from "./homepage";
import { MenuPage  } from "./menu";

const menuBtn = document.querySelector(".menu");
const contentDiv = document.querySelector(".content");

PageLoad(contentDiv);

function LoadMenu(){
    contentDiv.textContent = "";
     MenuPage(contentDiv);
    };
menuBtn.addEventListener("click", LoadMenu);