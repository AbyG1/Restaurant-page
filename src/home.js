const loadHomePage = () => {
    const pageContainer = document.getElementById('content')
    const mainContainer = document.createElement('div');
    const rightDiv = document.createElement('div');
    const leftDiv = document.createElement('div');
    const heroImg = document.createElement('img');
    const pageHeader = document.createElement('h1');
    const description = document.createElement('p');
    

    heroImg.src = "https://img.freepik.com/premium-photo/kerala-traditional-feast-side-dishes-arranged-two-colour-background-with-banana-leaf-serving-food_527904-2233.jpg";

    pageContainer.appendChild(mainContainer);
    mainContainer.appendChild(rightDiv);
    mainContainer.appendChild(leftDiv);
    rightDiv.appendChild(pageHeader);
    rightDiv.appendChild(description);
    leftDiv.appendChild(heroImg);

}   


export default loadHomePage


