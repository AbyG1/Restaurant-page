import "./styles.css";
import homePage from "./home.js"
import menuPage from "./menu.js"
import contactPage from "./contact.js";

const container = document.getElementById("content");


document.addEventListener('DOMContentLoaded', function() {
        container.innerHTML = ''
        container.appendChild(homePage());
});



document.addEventListener("click",(e) => {

    if((e.target.id) === "homeBtn"){
        container.innerHTML = ''
        container.appendChild(homePage());
    }

    if((e.target.id) === "menuBtn"){
        container.innerHTML = ''
        container.appendChild(menuPage());
    }

     if((e.target.id) === "contactBtn"){
        container.innerHTML = ''
        container.appendChild(contactPage());
    }


})