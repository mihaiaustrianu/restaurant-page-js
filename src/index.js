import "./global.css";
import { headlineGenerator, containersGenerator } from "./home";
import cardsGenerator from "./menu"
import {contactGenerator,mapGenerator} from "./contact"

let content = document.querySelector(".page-content");

const navManager = (() => {
  function changePage(clickedPageEvent) {
    const clickedPage = clickedPageEvent.target;
    const clickedPageValue = clickedPage.getAttribute("data-page");
    clearCurent();
    clickedPage.classList.add("curent")
    console.log(clickedPageValue);

    switch (clickedPageValue) {
        case 'menu':
            content.innerHTML='';
            content.appendChild(cardsGenerator())
            break;
        case 'home':
            content.innerHTML='';
            content.appendChild(headlineGenerator());
            content.appendChild(containersGenerator());
            break;
        case 'contact':
          content.innerHTML='';
          content.appendChild(mapGenerator());
          content.appendChild(contactGenerator());
          break;
        default:
            break;
    }
  }
  function clearCurent(){
    document.querySelectorAll(".nav-link").forEach((item) => {
    item.classList.remove('curent');
    });
  }
  function initializePage(){
    content.appendChild(headlineGenerator());
    content.appendChild(containersGenerator());
  }

  return {changePage,initializePage};
})();

navManager.changePage;
document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", navManager.changePage);
});
navManager.initializePage()
