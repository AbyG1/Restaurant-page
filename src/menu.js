import "./pages.css";
import biryani from './assets/biryani.jpeg';
import beeffry from './assets/beefry.JPG';
import chicken from './assets/chiken.jpeg';
import fishcurry from './assets/fishcurry.jpeg';
import fishfry from './assets/fishfry.jpeg';
import pork from './assets/pork.jpeg';
import porotta from './assets/porotta.jpeg';
import puttu from './assets/puttu.jpeg';
import sadhya from './assets/sadhya.jpeg';




const menuPage = () => {

    // const pageContainer = document.getElementById('content');
    const mainContainer = document.createElement('div');
    const headingEle = document.createElement('h1');
    const menuContainer = document.createElement('div');
   
    mainContainer.classList.add('main-container');
    headingEle.classList.add('menu-heading');
    mainContainer.classList.add('menu-container-modifier')

    headingEle.textContent = "Menu"


    const menuItemslist = [
        {"name": "Biryani", "img": biryani,"price": "$2"},
        {"name": "Porotta","img": porotta,"price": "$.5"},
        {"name": "Beef fry", "img": beeffry,"price": "$2"},
        {"name": "Pork Roast", "img": pork,"price": "$2"},
        {"name": "Chicken Curry", "img": chicken,"price": "$2"},
        {"name": "Sadhya", "img": sadhya,"price": "$3"},
        {"name": "Fish Fry", "img": fishfry,"price": "$2"},
        {"name": "Fish curry", "img": fishcurry,"price": "$1.5"},
        {"name": "Puttu & Kadala", "img": puttu,"price": "$.5"}
    ]

    menuItemslist.forEach(item => {
        const menu = document.createElement('div');
        const title = document.createElement('p');
        const image = document.createElement('img');
        
        title.textContent = item.name;
        image.src = item.img;
        

        
        menu.appendChild(image);
        menu.appendChild(title);
    

        menu.classList.add('menu-item');
        image.classList.add('item-img');
        title.classList.add('item-name')

        menuContainer.appendChild(menu);
    })

    mainContainer.appendChild(headingEle);

    mainContainer.appendChild(menuContainer);

    return mainContainer

}


export default menuPage