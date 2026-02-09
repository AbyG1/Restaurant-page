import "./pages.css"
import img1 from "./assets/Kerala-cuisine.jpg" 

const homePage = () => {
   
    const mainContainer = document.createElement('div');
    const rightDiv = document.createElement('div');
    const leftDiv = document.createElement('div');
    const heroImg = document.createElement('img');
    const pageHeader = document.createElement('h1');
    const description = document.createElement('p');
    
    mainContainer.classList.add('main-container')
    rightDiv.classList.add('right');
    leftDiv.classList.add('left');
    rightDiv.classList.add('landing')
    pageHeader.classList.add('hero-text')
    description.classList.add('description-text');
    mainContainer.classList.add('container-modify');
    leftDiv.classList.add('left-modify');
    rightDiv.classList.add('right-modify');

    heroImg.src = img1;
    heroImg.classList.add('hero-img');

    mainContainer.appendChild(leftDiv);
    mainContainer.appendChild(rightDiv);
    
    rightDiv.appendChild(pageHeader);
    rightDiv.appendChild(description);
    leftDiv.appendChild(heroImg);

    mainContainer.classList.add('main-container');
    rightDiv.classList.add('right-div');
    leftDiv.classList.add('left-div');
    heroImg.classList.add('hero-img');


    pageHeader.classList.add('page-header');
    description.classList.add('description');

    pageHeader.textContent = "Ruchi Restaurant";
    description.textContent = "Experience the finest kerala cuisine with a blend of exquisite flavors and a cozy atmosphere. Join us for an unforgettable culinary journey!";
    heroImg.src 

    return mainContainer;

}   


export default homePage



