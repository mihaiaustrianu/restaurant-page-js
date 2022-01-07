import "./menu.css";

const cardsGenerator = () => {
    //Menu container 
    const menu = document.createElement("div");
    menu.classList.add("menu");

    //Menu text
    let menuText = document.createElement("h1");
    menuText.innerHTML = "Menu items"
    menu.appendChild(menuText);
    
    //Cards container
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards");
  
    let cards = [{
        "text":"Fruity loops",
        "image" :"https://images.pexels.com/photos/1495534/pexels-photo-1495534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },{
        "text":"Banana musli",
        "image" :"https://images.pexels.com/photos/128865/pexels-photo-128865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },{
        "text":"Blueberry musli",
        "image" :"https://images.pexels.com/photos/216951/pexels-photo-216951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },{
        "text":"Peach musli",
        "image" :"https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    ]
    cards.forEach( function (cardItem){
    //Card creation
    let cardElement = document.createElement("div")
    cardElement.classList.add('card');

    //Text div creation
    let textContent = document.createElement("div");
    textContent.classList.add("text-container");

    //Text content creation
    let title = document.createElement("h3");
    title.innerText = cardItem.text;
    title.classList.add("card-text");
    textContent.appendChild(title);
  
    //Image
    let image = document.createElement("img");
    image.classList.add("image");
    image.src = cardItem.image;
  
    cardElement.appendChild(image);
    cardElement.appendChild(textContent);

    cardsContainer.appendChild(cardElement);
    menu.appendChild(cardsContainer)
    })
    
    return menu;
  };
  export default cardsGenerator;