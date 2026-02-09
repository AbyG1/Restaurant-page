import "./pages.css"
import img from "./assets/rest.jpeg"
const contactPage = () => {

    const mainContainer = document.createElement("div");
    const leftContainer = document.createElement("div");
    const rightContainer = document.createElement("div");
    const image = document.createElement('img');
    const heading = document.createElement('h1');
    const date = document.createElement("h3");
    const time = document.createElement("h3");
    const address = document.createElement("h3");

    image.src = img
    image.classList.add('contact-img');

    mainContainer.classList.add('main-container');
    leftContainer.classList.add('left');
    rightContainer.classList.add('right');
    rightContainer.classList.add('right-modifier')

    heading.textContent = "find us here";
    date.textContent = "Monday to Sunday";
    time.textContent = "7am to 11am && 12pm to 11pm";
    address.textContent = "Somewhere in Alappuzha, Kerala"

    leftContainer.appendChild(image);
    rightContainer.appendChild(heading);
    rightContainer.appendChild(date);
    rightContainer.appendChild(time);
    rightContainer.appendChild(address);

    mainContainer.classList.add('contact-modifier')


    mainContainer.appendChild(leftContainer);
    mainContainer.appendChild(rightContainer);

    return mainContainer;

}


export default contactPage