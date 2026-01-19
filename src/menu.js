const menuPage = () => {

    // const pageContainer = document.getElementById('content');
    const mainContainer = document.createElement('div');
    const headingEle = document.createElement('h1');
    const menuContainer = document.createElement('div');
   
    headingEle.textContent = "Menu"


    const menuItemslist = [
        {"name": "Biryani", "img": "img1","price": "$2"},
        {"name": "Porotta","img": "img2","price": "$.5"},
        {"name": "Beef fry", "img": "img3","price": "$2"},
        {"name": "Pork Roast", "img": "img4","price": "$2"},
        {"name": "Chicken Curry", "img": "img5","price": "$2"},
        {"name": "Sadhya", "img": "img6","price": "$3"},
        {"name": "Fish Fry", "img": "img7","price": "$2"},
        {"name": "Fish curry", "img": "img8","price": "$1.5"},
        {"name": "Puttu & Kadala", "img": "img9","price": "$.5"}
    ]

    menuItemslist.forEach(item => {
        const menu = document.createElement('div');
        const title = document.createElement('p');
        const image = document.createElement('img');
        const price = document.createElement('p');

        title.textContent = item.name;
        image.src = item.img;
        price.textContent = item.price;



        menu.appendChild(title);
        menu.appendChild(image);
        menu.appendChild(price);

        menuContainer.appendChild(menu);
    })

    mainContainer.appendChild(headingEle);

    mainContainer.appendChild(menuContainer);

    return mainContainer

}


export default menuPage