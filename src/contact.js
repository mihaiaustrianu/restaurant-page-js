import "./contact.css";

const mapGenerator = () =>{
    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map");

    const mapImage = document.createElement("img");
    mapImage.src = "https://image.freepik.com/free-vector/colored-city-map-with-streets-park_23-2148318250.jpg";

    mapContainer.appendChild(mapImage);
    return mapContainer;
}

const contactGenerator = () => {
    //Menu container 
    const contact = document.createElement("div");
    contact.classList.add("contact");


    const textContact = document.createElement("p");
    textContact.innerHTML= "Contact us here:";
    textContact.classList.add("text-contact");
    contact.appendChild(textContact);
    //phone
    const phoneContainer = document.createElement("div");
    contact.classList.add("phone-container");
    
    const phoneNumber = document.createElement("p");
    phoneNumber.innerHTML = "Phone number : xxxx - xxx - xxx"
    phoneContainer.appendChild(phoneNumber);

    //Location
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");
    
    const location = document.createElement("p");
    location.innerHTML = "Location: Bucharest, Iuliu Maniu"
    locationContainer.appendChild(location);

    contact.appendChild(phoneContainer);
    contact.appendChild(locationContainer);
    return contact;
}

export  {contactGenerator,mapGenerator}
